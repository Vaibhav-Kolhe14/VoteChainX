import React, { useEffect, useState } from 'react'
import { Web3Context } from './Web3Context'
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
            const { contractInstance, selectedAccount, chainId, networkName, signer, provider } = await getWeb3State()
            console.log(contractInstance, selectedAccount, chainId)

            // Update the web3State with the fetched data
            setWeb3State({ contractInstance, selectedAccount, chainId, networkName, signer, provider });

            // Persist selectedAccount to localStorage
            localStorage.setItem('selectedAccount', selectedAccount);
            console.log(contractInstance, selectedAccount, chainId, networkName, signer, provider);
        } catch (error) {
            console.error("Error in Web3Provider :: ", error)
        }
    }

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
    localStorage.removeItem('selectedAccount'); // Clear from localStorage
  };

  useEffect(() => {
    const initWeb3State = async () => {
      const storedAccount = localStorage.getItem('selectedAccount');
      if (storedAccount) {
      // If there's a stored account, set it in the web3State
        setWeb3State(prevState => ({
          ...prevState,
          selectedAccount: storedAccount
        }));
      }
    };

    initWeb3State();

    // Listen for changes in the accounts and chains, and handle them accordingly
    window.ethereum.on('accountsChanged', () => HandleAccountChange(setWeb3State));
    window.ethereum.on('chainChanged', () => HandleChainChange(setWeb3State));

    // Cleanup: Remove the listeners when the component unmounts
    return () => {
      window.ethereum.removeListener('accountsChanged', () => HandleAccountChange(setWeb3State));
      window.ethereum.removeListener('chainChanged', () => HandleChainChange(setWeb3State));
    };
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div>
      <Web3Context.Provider value={{ web3State, handleWallet, disconnectWallet }}>
        {children}
      </Web3Context.Provider>
    </div>
  )
}

export default Web3Provider
