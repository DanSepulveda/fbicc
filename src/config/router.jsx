import { createBrowserRouter } from 'react-router-dom'
import { FaRegClock, FaRegImage } from 'react-icons/fa6'
import { Md123, MdAbc, MdOutlineTouchApp } from 'react-icons/md'
import DatePage from '@pages/Date'
import Family from '@pages/Family'
import FullAnswer from '@pages/Position/FullAnswer'
import Home from '@pages/Home'
import Layout from '@pages/Layouts/Layout'
import LayoutOption from '@pages/Layouts/LayoutOption'
import MultipleChoice from '@pages/Position/MultipleChoice'
import NumberToText from '@pages/Numbers/NumberToText'
import Patterns from '@pages/Patterns'
import Spelling from '@pages/Spelling'
import TextToNumber from '@pages/Numbers/TextToNumber'
import TextToTime from '@pages/Time/TextToTime'
import TimeToText from '@pages/Time/TimeToText'
import Vocabulary from '@pages/Vocabulary'
import Help from '@components/Help'
import Highlight from '@components/Highlight'
import Selector from '@components/Selector'

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
          options: (
            <section className="grid grid-cols-2">
              <Selector
                to="/numbers/number-to-text"
                before={<Md123 className="text-5xl" />}
                after={<MdAbc className="text-5xl" />}
              />
              <Selector
                to="/numbers/text-to-number"
                before={<MdAbc className="text-5xl" />}
                after={<Md123 className="text-5xl" />}
              />
            </section>
          )
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
          options: (
            <div className="grid grid-cols-2">
              <Selector
                to="/time/time-to-text"
                before={<FaRegClock className="text-xl" />}
                after={<MdAbc className="text-5xl" />}
              />
              <Selector
                to="/time/text-to-time"
                before={<MdAbc className="text-5xl" />}
                after={<FaRegClock className="text-xl" />}
              />
            </div>
          )
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
              help: (
                <Help>
                  <Help.Title>Time format</Help.Title>
                  <Help.Subtitle>lebih</Help.Subtitle>
                  <div>
                    <Help.Text>It will always be considered correct</Help.Text>
                  </div>
                  <Help.Subtitle>kurang</Help.Subtitle>
                  <Help.List></Help.List>
                  <Help.Text>It will be considered correct when minutes is above 30</Help.Text>
                  <Help.List>
                    <Help.ListItem correct>(10:55) jam sebelas kurang lima</Help.ListItem>
                    <Help.ListItem correct>(7:38) jam delapan kurang dua puluh dua</Help.ListItem>
                    <Help.ListItem wrong>(4:30) jam lima kurang tiga puluh</Help.ListItem>
                    <Help.ListItem wrong>(6:18) jam tujuh kurang empat puluh dua</Help.ListItem>
                  </Help.List>
                </Help>
              )
            }
          }
        ]
      },
      {
        path: '/position',
        element: <LayoutOption />,
        handle: {
          title: 'Poisi (position)',
          options: (
            <div className="grid grid-cols-2">
              <Selector
                to="/position/full-answer"
                before={<FaRegImage className="text-xl" />}
                after={<MdAbc className="text-5xl" />}
              />
              <Selector
                to="/position/multiple-choice"
                before={<FaRegImage className="text-xl" />}
                after={<MdOutlineTouchApp className="text-2xl" />}
              />
            </div>
          )
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
          help: (
            <Help>
              <Help.Title>Answer format</Help.Title>
              <Help.Subtitle>
                Tanggal berapa <Highlight>hari ini</Highlight>? (08/05/2023)
              </Help.Subtitle>
              <Help.List>
                <Help.ListItem>delapan mei dua ribu dua puluh tiga</Help.ListItem>
                <Help.ListItem>
                  <Highlight>hari ini tanggal</Highlight> delapan mei dua ribu dua puluh tiga
                </Help.ListItem>
              </Help.List>
              <Help.Subtitle>
                Hari apa <Highlight color="green">kemarin</Highlight>? (monday)
              </Help.Subtitle>
              <Help.List>
                <Help.ListItem>senin</Help.ListItem>
                <Help.ListItem>
                  <Highlight color="green">kemarin hari</Highlight> senin
                </Help.ListItem>
              </Help.List>
            </Help>
          )
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
          help: (
            <Help>
              <Help.Title>Instructions</Help.Title>
              <Help.Subtitle>Step 1</Help.Subtitle>
              <Help.Text>
                Use the numbers to include/exclude the vocabulary corresponding to each class.
              </Help.Text>
              <Help.Subtitle>Step 2</Help.Subtitle>
              <Help.Text>
                Pair the Indonesian words with their corresponding English translations. When you
                select a word in English, only the Indonesian words will remain active, and vice
                versa.
              </Help.Text>
              <Help.Subtitle>Step 3</Help.Subtitle>
              <Help.Text>
                When you complete the 10 pairs, you can continue with the next 10.
              </Help.Text>
            </Help>
          )
        }
      }
    ]
  }
])
