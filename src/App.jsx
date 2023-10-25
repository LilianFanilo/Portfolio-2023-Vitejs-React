import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './screens/Home'
import Resaweb from './screens/Resaweb'
import DataViz from './screens/Dataviz'
import DaftPunk from './screens/DaftPunk'
import Vovinam from './screens/Vovinam'
import Interview from './screens/Interview'
import Peexeo from './screens/Peexeo'
import Yonnha from './screens/Yonnha'
import Campagne from './screens/Campagne'

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
  {
    path : '/peexeo',
    element : <Peexeo/>
  },
  {
    path : '/yonnha',
    element : <Yonnha/>
  },
  {
    path : '/campagne',
    element : <Campagne/>
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
