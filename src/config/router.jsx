import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Spelling from '../pages/Spelling'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/spelling',
        element: <Spelling />
      }
    ]
  }
])
