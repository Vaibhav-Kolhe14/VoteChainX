import Web3Provider from './context/Web3Provider'
import { Routes } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
    <Web3Provider>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </Web3Provider>
    </>
  )
}

export default App
