import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import Spelling from '../pages/Spelling'
import NumberToText from '../pages/Numbers/NumberToText'
import NumberLayout from '../pages/Numbers/NumberLayout'
import TextToNumber from '../pages/Numbers/TextToNumber'
import TextToTime from '../pages/Time/TextToTime'
import TimeToText from '../pages/Time/TimeToText'
import AudioToText from '../pages/Numbers/AudioToNumber'
import Family from '../pages/Family'
import Positions from '../pages/Positions'
import TimeLayout from '../pages/Time/TimeLayout'

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
        handle: { title: 'Numbers exercises' },
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
      // OK
      {
        path: '/family',
        element: <Family />,
        handle: { title: 'Keluarga (family)' }
      },
      {
        path: '/time',
        element: <TimeLayout />,
        handle: { title: 'Time exercises' },
        children: [
          {
            path: 'text-to-time',
            element: <TextToTime />,
            handle: { title: 'Text to time' }
          },
          {
            path: 'time-to-text',
            element: <TimeToText />,
            handle: { title: 'Time to text' }
          }
        ]
      },
      {
        path: '/positions',
        element: <Positions />,
        handle: { title: 'Positions' }
      }
    ]
  }
])
