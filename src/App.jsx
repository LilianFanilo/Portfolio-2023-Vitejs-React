import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './screens/Home'
import Resaweb from './screens/Resaweb'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/resaweb',
    element : <Resaweb/>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
