import { createBrowserRouter } from 'react-router-dom'
import Home from '@/page/home/Home'
import Introduce from '@/page/introduce/Introduce'
import About from '@/components/about/About'
import Lilsnake from '@/components/lilsnake/Lilsnake'
import Timeline from '../page/log/Timeline'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
    children:[
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/lilsnake',
        element:<Lilsnake/>,
      },
      {
        path:'/timeline',
        element:<Timeline/>,
      },
    ]
  },
  {
    path: "/introduce",
    element:<Introduce/>,
    // loader: rootLoader,
  },
  

])

export default router