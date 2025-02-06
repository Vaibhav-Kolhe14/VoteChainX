// import React from 'react'
// import { UseWeb3Context } from '../../context/UseWeb3Context';
// import { toast } from "react-hot-toast";

// const EmergencyDeclare = () => {
//   const { web3State } = UseWeb3Context();
//   const { contractInstance } = web3State;

//   const emergencyStop = async () => {
//     try {
//       console.log("stop")
//       await contractInstance.StopVoting();
//       toast.success("Voting has been stopped!");
//     } catch (error) {
//       toast.error("Error: Emergency Stop");
//       console.error(error);
//     }
//   };

//   return (
//     <button onClick={emergencyStop} className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg ">
//       Stop Voting
//     </button>
//   );
// };

// export default EmergencyDeclare;



import React, { useEffect, useState } from 'react';
import { UseWeb3Context } from '../../context/UseWeb3Context';
import { toast } from "react-hot-toast";

const EmergencyDeclare = () => {
  const { web3State } = UseWeb3Context();
  const { contractInstance } = web3State;

  const [votingStatus, setVotingStatus] = useState("In Progress"); // Default voting status
  const [isVotingStopped, setIsVotingStopped] = useState(false);  // To track if voting is stopped
  const [canStopVoting, setCanStopVoting] = useState(true);  // Track if Stop Voting can be clicked

  // Function to fetch voting status
  const fetchVotingStatus = async () => {
    try {
      // Fetch stopVoting flag and times from contract
      const stopVoting = await contractInstance.stopVoting();
      const startTime = await contractInstance.startTime();
      const endTime = await contractInstance.endTime();
      const currentTime = Math.floor(Date.now() / 1000); // Current timestamp in seconds

      console.log("Contract times:", { startTime, endTime, currentTime, stopVoting });

      if (stopVoting) {
        setVotingStatus("Ended");
        setIsVotingStopped(true); // Voting is stopped
        setCanStopVoting(false); // Disable the button
      } else if (currentTime < startTime) {
        setVotingStatus("Not Started");
        setIsVotingStopped(false);
        setCanStopVoting(true);
      } else if (currentTime >= startTime && currentTime <= endTime) {
        setVotingStatus("In Progress");
        setIsVotingStopped(false);
        setCanStopVoting(true); // Voting is in progress, button can be clicked
      } else {
        setVotingStatus("Ended");
        setIsVotingStopped(true);
        setCanStopVoting(false); // Voting time has passed
      }
    } catch (error) {
      console.error("Error fetching voting status:", error);
      toast.error("Error fetching voting status.");
    }
  };

  // Fetch voting status when component mounts
  useEffect(() => {
    fetchVotingStatus();
  }, [contractInstance]);

  const emergencyStop = async () => {
    try {
      console.log("Stop Voting");
      await contractInstance.StopVoting(); // Call the smart contract method to stop voting
      toast.success("Voting has been stopped!");
      fetchVotingStatus(); // Fetch the updated status after stopping voting
    } catch (error) {
      toast.error("Error: Emergency Stop");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">
          Voting Status: {votingStatus}
        </h2>
      </div>

      <button 
        onClick={emergencyStop} 
        className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg"
        disabled={!canStopVoting} // Disable the button if voting is not in progress or already stopped
      >
        Stop Voting
      </button>
    </div>
  );
};

export default EmergencyDeclare;


