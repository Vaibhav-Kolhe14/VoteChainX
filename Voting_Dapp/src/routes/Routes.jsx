import { createBrowserRouter } from "react-router-dom"
import RegisterVoter from "../pages/Voter/RegisterVoter.jsx"
import RegisterCandidate from "../pages/Candidate/RegisterCandidate.jsx"
import GetCandidateList from "../pages/Candidate/GetCandidateList.jsx"
import GetVoterList from "../pages/Voter/GetVoterList.jsx"
import ElectionCommission from "../pages/ElectionCommission/ElectionCommission.jsx"
import Wallet from "../components/Wallet/Wallet.jsx"
import Navigation from "../components/Navigation/Navigation.jsx"
import TokenExchange from "../pages/TokenMarketplace/TokenMarketplace"
import CastVote from "../components/Voter/CastVote";
import Footer from "../components/Footer/Footer.jsx"


export const Routes = createBrowserRouter([
    {
      path: '/', element: (
        <div>
          <Navigation />
          <Wallet />
          <Footer/>
        </div>)
    },
    {
      path: '/register-voter', element: (
        <div>
          <Navigation />
          <RegisterVoter />
          <Footer/>
  
        </div>
  
      )
    },
    {
      path: '/register-candidate', element: (
        <div>
          <Navigation />
          <RegisterCandidate />
          <Footer/>
  
        </div>
      )
    },
    {
      path: '/voter-list', element: (
        <div>
          <Navigation />
          <GetVoterList />
          <Footer/>
  
        </div>
      )
    },
    {
      path: '/candidate-list', element: (
        <div>
          <Navigation />
          <GetCandidateList />
          <Footer/>
  
        </div>
      )
    },
    {
      path: '/cast-vote', element: (
        <div>
          <Navigation />
          <CastVote/>
          <Footer/>
  
        </div>
      )
    },
    {
      path: '/election-commission', element: (
        <div>
          <Navigation />
          <ElectionCommission />
          <Footer/>
  
        </div>
      )
    },
    {path:"/token-marketplace",element:(
      <div>
          <Navigation/>
          <TokenExchange/>
          <Footer/>
      </div>
)},
])
