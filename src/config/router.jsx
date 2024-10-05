import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Spelling from '../pages/Spelling'
import NumberToText from '../pages/Numbers/NumberToText'
import NumberLayout from '../pages/Numbers/NumberLayout'
import TextToNumber from '../pages/Numbers/TextToNumber'
import AudioToText from '../pages/Numbers/AudioToNumber'
import Family from '../pages/Family'
import Positions from '../pages/Positions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: { title: 'Activities' }
      },
      {
        path: '/spelling',
        element: <Spelling />,
        handle: { title: 'Spell words' }
      },
      {
        path: '/numbers',
        element: <NumberLayout />,
        handle: { title: 'Numbers exercices' },
        children: [
          {
            path: 'text-to-number',
            element: <TextToNumber />,
            handle: { title: 'Text to number' }
          },
          {
            path: 'number-to-text',
            element: <NumberToText />,
            handle: { title: 'Number to text' }
          },
          {
            path: 'audio-to-number',
            element: <AudioToText />,
            handle: { title: 'Audio to number' }
          }
        ]
      },
      {
        path: '/family',
        element: <Family />,
        handle: { title: 'Family' }
      },
      {
        path: '/positions',
        element: <Positions />,
        handle: { title: 'Positions' }
      }
    ]
  }
])
