import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Family from '../pages/Family'
import Spelling from '../pages/Spelling'
import NumberToText from '../pages/Numbers/NumberToText'
import NumberLayout from '../pages/Numbers/NumberLayout'
import TextToNumber from '../pages/Numbers/TextToNumber'
import TimeLayout from '../pages/Time/TimeLayout'
import TimeToText from '../pages/Time/TimeToText'
import TextToTime from '../pages/Time/TextToTime'
import FullAnswer from '../pages/Position/FullAnswer'
import MultipleChoice from '../pages/Position/MultipleChoice'
import PositionLayout from '../pages/Position/PositionLayout'
import DatePage from '../pages/Date'
// import Vocabulary from '../pages/Vocabulary'
import Patterns from '../pages/Patterns'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: { title: 'Aktivitas' }
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
          }
        ]
      },
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
        path: '/position',
        element: <PositionLayout />,
        handle: { title: 'Poisi (position)' },
        children: [
          {
            path: 'full-answer',
            element: <FullAnswer />,
            handle: { title: 'Write answer' }
          },
          {
            path: 'multiple-choice',
            element: <MultipleChoice />,
            handle: { title: 'Multiple choice' }
          }
        ]
      },
      {
        path: '/date',
        element: <DatePage />,
        handle: { title: 'Tanggal (date)' }
      },
      {
        path: '/patterns',
        element: <Patterns />,
        handle: { title: 'Patterns' }
      }
      // {
      //   path: '/vocabulary',
      //   element: <Vocabulary />,
      //   handle: { title: 'Kosakata' }
      // }
    ]
  }
])
