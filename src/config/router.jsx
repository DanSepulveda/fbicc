import { createBrowserRouter } from 'react-router-dom'
import DatePage, { DatePageHelp } from '@pages/Date'
import Family from '@pages/Family'
import FullAnswer from '@pages/Position/FullAnswer'
import Home from '@pages/Home'
import Layout from '@pages/Layouts/Layout'
import LayoutOption from '@pages/Layouts/LayoutOption'
import MultipleChoice from '@pages/Position/MultipleChoice'
import NumberOptions from '@pages/Numbers/NumberOptions'
import NumberToText from '@pages/Numbers/NumberToText'
import Patterns from '@pages/Patterns'
import PositionOptions from '@pages/Position/PositionOptions'
import Spelling from '@pages/Spelling'
import TextToNumber from '@pages/Numbers/TextToNumber'
import TextToTime from '@pages/Time/TextToTime'
import TimeOptions from '@pages/Time/TimeOptions'
import TimeToText, { TimeToTextHelp } from '@pages/Time/TimeToText'
import Vocabulary, { VocabularyHelp } from '@pages/Vocabulary'

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
        element: <LayoutOption />,
        handle: {
          title: 'Numbers exercises',
          options: <NumberOptions />
        },
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
        element: <LayoutOption />,
        handle: {
          title: 'Time exercises',
          options: <TimeOptions />
        },
        children: [
          {
            path: 'text-to-time',
            element: <TextToTime />,
            handle: { title: 'Text to time' }
          },
          {
            path: 'time-to-text',
            element: <TimeToText />,
            handle: {
              title: 'Time to text',
              help: <TimeToTextHelp />
            }
          }
        ]
      },
      {
        path: '/position',
        element: <LayoutOption />,
        handle: {
          title: 'Poisi (position)',
          options: <PositionOptions />
        },
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
        handle: {
          title: 'Tanggal (date)',
          help: <DatePageHelp />
        }
      },
      {
        path: '/patterns',
        element: <Patterns />,
        handle: { title: 'Patterns' }
      },
      {
        path: '/vocabulary',
        element: <Vocabulary />,
        handle: {
          title: 'Kosakata',
          help: <VocabularyHelp />
        }
      }
    ]
  }
])
