import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './screens/Home'
import Resaweb from './screens/Resaweb'
import DataViz from './screens/Dataviz'
import DaftPunk from './screens/DaftPunk'
import Vovinam from './screens/Vovinam'
import Interview from './screens/Interview'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/resaweb',
    element : <Resaweb/>
  },
  {
    path : '/dataviz',
    element : <DataViz/>
  },
  {
    path : '/daftpunk',
    element : <DaftPunk/>
  },
  {
    path : '/vovinam',
    element : <Vovinam/>
  },
  {
    path : '/interview',
    element : <Interview/>
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
