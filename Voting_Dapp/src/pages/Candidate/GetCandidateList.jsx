<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'

=======
import React, { useState, useEffect } from 'react';
import { UseWeb3Context } from '../../context/UseWeb3Context';
>>>>>>> 037017d (commit)
=======
import React, { useState, useEffect } from 'react'
import { UseWeb3Context } from '../../context/UseWeb3Context'

>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf

// Function to map enum values to strings
const getGenderString = (genderValue) => {
  switch (genderValue) {
    case "0":
      return "Not Specified";
    case "1":
      return "Male";
    case "2":
      return "Female";
    case "3":
      return "Other";
    default:
      return "Unknown";
  }
};

const GetCandidateList = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf

  const { web3State } = UseWeb3Context()
  const { contractInstance } = web3State
  const [candidateList, setCandidateList] = useState([])

  useEffect(() => {
    const fetchCandidateList = async () => {
      try {
        const candidates = await contractInstance.getCandidateList()
        setCandidateList(candidates);
      } catch (error) {
        console.log("Error in GetCandidateList's useEffect :: ", error)
      }
      if (contractInstance) {
        fetchCandidateList(); // Initial fetch on component mount
  
        // Set up interval to fetch candidate list every 3 seconds
        const interval = setInterval(() => {
          fetchCandidateList();
        }, 3000); // 3000 ms = 3 seconds
  
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }
    }

    if (contractInstance) {
      fetchCandidateList()
    }
  }, [contractInstance])
<<<<<<< HEAD
=======
  const { web3State } = UseWeb3Context();
  const { contractInstance } = web3State;
  const [candidateList, setCandidateList] = useState([]);

  useEffect(() => {
    const fetchCandidateList = async () => {
      if (!contractInstance) {
        console.log("Contract instance is not available.");
        return;
      }

      try {
        console.log("Fetching candidate list...");
        const candidates = await contractInstance.getCandidateList();
        console.log("Candidates fetched:", candidates);
        setCandidateList(candidates);
      } catch (error) {
        console.error("Error in GetCandidateList's useEffect :: ", error);
      }
    };

    if (contractInstance) {
      fetchCandidateList(); // Initial fetch on component mount

      // Set up interval to fetch candidate list every 3 seconds
      const interval = setInterval(() => {
        console.log("Refreshing candidate list...");
        fetchCandidateList();
      }, 3000); // 3000 ms = 3 seconds

      // Cleanup the interval on component unmount
      return () => {
        console.log("Clearing interval...");
        clearInterval(interval);
      };
    }
  }, [contractInstance]);
>>>>>>> 037017d (commit)
=======
>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-8">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-10">Candidate List</h1>

      {/* Display a message if no candidates are available */}
      {candidateList.length === 0 ? (
        <div className="text-center text-xl text-gray-400">
          No candidates available at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidateList.map((candidate, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                className="w-24 h-24 object-cover rounded-full border-2 border-blue-500 mb-4"
                src={`${import.meta.env.VITE_BACKEND_API_URL}/public/CandidateImages/${candidate.candidateAddress}.png`}
                alt={`${candidate.name}'s image`}
                onError={(e) => {
                  e.target.src = '/default.png'; // Replace with the actual default image path
                }}
              />
              <h2 className="text-xl font-bold mb-2">{candidate.name}</h2>
              <p className="text-gray-400 text-sm mb-4">Party: {candidate.party}</p>
              <div className="bg-gray-700 rounded-lg p-4 w-full mb-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span><strong>ID:</strong></span>
                    <span>{candidate.candidateId.toString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Age:</strong></span>
                    <span>{candidate.age.toString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Gender:</strong></span>
                    <span>{getGenderString(candidate.gender.toString())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Votes:</strong></span>
                    <span>{candidate.votes.toString()}</span>
                  </div>
                </div>
              </div>
              {/* Account Address displayed outside the details box */}
              <p className="text-gray-400 text-sm"><strong>Wallet Address:</strong> {candidate.candidateAddress}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default GetCandidateList

<<<<<<< HEAD
=======
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-10">Candidate List</h1>

        {/* Display a message if no candidates are available */}
        {candidateList.length === 0 ? (
          <div className="text-center text-xl text-gray-400">
            No candidates available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidateList.map((candidate, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  className="w-24 h-24 object-cover rounded-full border-2 border-blue-500 mb-4"
                  src={`${import.meta.env.VITE_BACKEND_API_URL}/public/CandidateImages/${candidate.candidateAddress}.png`}
                  alt={`${candidate.name}'s image`}
                  onError={(e) => {
                    e.target.src = '/default.png'; // Replace with the actual default image path
                  }}
                />
                <h2 className="text-xl font-bold mb-2">{candidate.name}</h2>
                <p className="text-gray-400 text-sm mb-4">Party: {candidate.party}</p>
                <div className="bg-gray-700 rounded-lg p-4 w-full mb-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between">
                      <span><strong>ID:</strong></span>
                      <span>{candidate.candidateId.toString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Age:</strong></span>
                      <span>{candidate.age.toString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Gender:</strong></span>
                      <span>{getGenderString(candidate.gender.toString())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Votes:</strong></span>
                      <span>{candidate.votes.toString()}</span>
                    </div>
                  </div>
                </div>
                {/* Account Address displayed outside the details box */}
                <p className="text-gray-400 text-sm"><strong>Wallet Address:</strong> {candidate.candidateAddress}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GetCandidateList;
>>>>>>> 037017d (commit)
=======
>>>>>>> 1969b55efe8627e4b8234fb18c68511e7d13bbaf
