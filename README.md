# VoteChainX

VoteChainX is a decentralized voting platform powered by blockchain technology, designed to ensure secure, transparent, and tamper-proof voting processes. By leveraging the power of blockchain, VoteChainX offers a solution that mitigates fraud and manipulations, enabling voters to participate in elections with confidence. The platform uses smart contracts to automate the voting process and ensure that each vote is securely recorded and can be verified in real-time.

## Features

- **Decentralized Voting**: Secure and transparent voting using blockchain technology.
- **Smart Contracts**: Automate the voting process and ensure results are tamper-proof.
- **Blockchain-based Data Integrity**: Immutable records that cannot be altered or manipulated.
- **Real-time Verification**: Votes can be verified immediately, ensuring transparency.
- **User Authentication**: Secure user authentication to ensure only authorized participants can vote.
- **Privacy**: Voter identities are kept confidential, ensuring a private and fair voting process.
- **Token Marketplace**: The platform includes a marketplace for purchasing voting tokens. Only token holders can vote, ensuring that only authorized users can participate in elections.
- **Dynamic Token Price**: The token price is adjusted dynamically based on supply and demand, providing a fair market-based pricing model for voting tokens.
- **ERC-20 Token Integration**: The system uses an ERC-20 token to represent voting power, ensuring seamless and standardized interactions with Ethereum-based decentralized applications (dApps).

## Tech Stack

- **Blockchain**: Ethereum 
- **Smart Contracts**: Solidity
- **ERC-20 Token**: Token standards for creating and managing voting tokens
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Ethereum Integration**: Ethers.js (for interacting with Ethereum blockchain)

## Installation

### Prerequisites

1. Node.js installed on your machine.
2. A local or test Ethereum network setup.
3. **MetaMask** or another Ethereum wallet extension for connecting to the blockchain.
4. **Remix IDE** for deploying smart contracts.

### Setup Instructions  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/Vaibhav-Kolhe14/VoteChainX.git 
   ```  

2. **Navigate to the Project Directory**:  
   ```bash  
   cd VoteChainX  
   ```  

3. **Install Dependencies for Backend and Frontend**:  
   - Navigate to the `backend` directory and install dependencies:  
     ```bash  
     cd backend  
     npm install  
     ```  
   - Navigate to the `Voting_Dapp` directory and install dependencies:  
     ```bash  
     cd ../Voting_Dapp 
     npm install  
     ```  

4. **Deploy Smart Contracts Using Remix IDE**:  
   - Open [Remix IDE](https://remix.ethereum.org/).  
   - Create a new Solidity contract or upload the existing smart contract file from this repository.  
   - Compile the smart contract using the Solidity compiler in Remix.  
   - Deploy the contract to a test network or Ethereum mainnet using Remix's "Deploy & Run Transactions" plugin, connected to your MetaMask wallet.  

5. **Run the Application**:  
   - Start the backend server:  
     ```bash  
     cd ../backend  
     npm start  
     ```  
   - Start the frontend development server:  
     ```bash  
     cd ../Voting_Dapp 
     npm run dev  
     ```
     
6. **Connect with MetaMask**:
   Ensure MetaMask is connected to your local blockchain or test network and that the account has sufficient tokens for voting.

> Thank you for checking out my project! 
