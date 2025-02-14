import { ethers } from "ethers";
import abi from "../constants/abi.json";
import axios from "axios";

export const getWeb3State = async () => {
  try {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];

    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    const chainId = parseInt(chainIdHex, 16);

    // Mapping chainId to network name
    let networkName = "";
    switch (chainId) {
      case 1:
        networkName = "Ethereum Mainnet";
        break;
      case 3:
        networkName = "Ropsten Test Network";
        break;
      case 4:
        networkName = "Rinkeby Test Network";
        break;
      case 5:
        networkName = "Goerli Test Network";
        break;
      case 42:
        networkName = "Kovan Test Network";
        break;
      case 56:
        networkName = "Binance Smart Chain";
        break;
      case 137:
        networkName = "Polygon Mainnet";
        break;
      case 80002:
        networkName = "Polygon Amoy Testnet";
        break;
      case 17000:
        networkName = "Ethereum Holesky Testnet";
        break;
      case 11155111:
        networkName = "Ethereum Sepolia Testnet";
        break;
      // Add more networks as needed
      default:
        networkName = "Unknown Network";
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contractAddress = import.meta.env.VITE_VOTING_CONTRACT_ADDRESS;

    // Cache contract address and other essential data in localStorage
    localStorage.setItem("contractAddress", contractAddress);
    localStorage.setItem("selectedAccount", selectedAccount);
    localStorage.setItem("web3State", JSON.stringify({ chainId, networkName }));

    const message =
      "Welcome to voting dapp, you accept our terms and conditions";
    const signature = await signer.signMessage(message);
    const dataSignature = {
      signature,
    };

    const res = await axios.post(
      `${
        import.meta.env.VITE_BACKEND_API_URL
      }/api/v1/auth?accountAddress=${selectedAccount}`,
      dataSignature
    );

    localStorage.setItem("token", res.data.data);

    const contractInstance = new ethers.Contract(contractAddress, abi, signer);

    return {
      contractInstance,
      selectedAccount,
      chainId,
      networkName,
      signer,
      provider,
    }; // Return networkName here
  } catch (error) {
    console.error("Error in GetWeb3State :: ", error);
    throw new Error(error.message);
  }
};
