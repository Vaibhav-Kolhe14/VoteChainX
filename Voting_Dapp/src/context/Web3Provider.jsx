import React, { useEffect, useState } from 'react'
import { Web3Context } from './Web3Context'
import { ethers } from 'ethers';
import { getWeb3State } from '../utils/GetWeb3State'
import { HandleAccountChange } from '../utils/handleAccountChange'
import { HandleChainChange } from '../utils/handleChainChange'

function Web3Provider({children}) {

    const [web3State, setWeb3State] = useState({
        contractInstance: null,
        selectedAccount: null,
        chainId: null,
        networkName: null,
        signer: null,
        provider: null
    })


    const handleWallet = async () => {
      try {
        const { contractInstance, selectedAccount, chainId, networkName, signer, provider } = await getWeb3State();
        console.log("\nFrom Web3PRovider:\n contractInstance :",contractInstance,"\nselectedAccount :", selectedAccount,"\nchainId :", chainId)
        // Update the web3State
        setWeb3State({ contractInstance, selectedAccount, chainId, networkName, signer, provider });
    
        // Cache the entire Web3 state in localStorage
        localStorage.setItem('selectedAccount', selectedAccount);
        localStorage.setItem(
          'web3State',
          JSON.stringify({ chainId, networkName })
        );
      } catch (error) {
        console.error('Error in Web3Provider :: ', error);
      }
    };

    // Function to handle wallet disconnection
  const disconnectWallet = () => {
    setWeb3State(prevState => ({
      ...prevState,
      selectedAccount: null,
      chainId: null,
      networkName: null,
      signer: null,
      provider: null
    }));
    localStorage.removeItem('web3State');
    localStorage.removeItem('selectedAccount'); // Clear from localStorage
  };


  useEffect(() => {
    const initWeb3State = async () => {
      const cachedWeb3State = localStorage.getItem('web3State');
      const storedAccount = localStorage.getItem('selectedAccount');
      console.log("\ncachedWeb3State :", cachedWeb3State, "\nstoredAccount :", storedAccount);
  
      if (cachedWeb3State && storedAccount) {
        const { chainId, networkName } = JSON.parse(cachedWeb3State);
  
        try {
          // Reconnect the wallet by requesting accounts
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const selectedAccount = accounts[0];
  
          // Reinitialize the provider and signer
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
  
          // Set the cached state with the reinitialized provider and signer
          setWeb3State({
            contractInstance: null, // You can reinitialize this if needed
            selectedAccount,
            chainId,
            networkName,
            provider,
            signer,
          });
        } catch (error) {
          console.error('Error reconnecting wallet:', error);
          // If the wallet connection fails, clear the cached state
          localStorage.removeItem('web3State');
          localStorage.removeItem('selectedAccount');
        }
      }
    };
  
    initWeb3State();
  
    // Listen for account and chain changes
    window.ethereum.on('accountsChanged', () => HandleAccountChange(setWeb3State));
    window.ethereum.on('chainChanged', () => HandleChainChange(setWeb3State));
  
    return () => {
      window.ethereum.removeListener('accountsChanged', () => HandleAccountChange(setWeb3State));
      window.ethereum.removeListener('chainChanged', () => HandleChainChange(setWeb3State));
    };
  }, []);


  return (
    <div>
      <Web3Context.Provider value={{ web3State, handleWallet, disconnectWallet }}>
        {children}
      </Web3Context.Provider>
    </div>
  )
}

export default Web3Provider
