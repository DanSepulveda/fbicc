import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { addDays, format, getDay } from 'date-fns'
import { useScreenshot } from 'use-react-screenshot'
import { Tooltip } from 'react-tooltip'
import Toast from '../components/Toast'
import TooltipText from '../components/TooltipText'
import { getRandomDate, randomFromArray } from '../lib/getRandom'
import { dateToText, generateDateRange } from '../lib/rangeDate'
import { dayPrepositions, days, questions } from '../data/date'
import { formatText } from '../lib/tools'
import { correctSound, wrongSound } from '../lib/sounds'

export const useDate = () => {
  const [image, takeScreenshot] = useScreenshot()
  const [selected, setSelectedDate] = useState()
  const [dates, setDates] = useState([])
  const [empty, setEmpty] = useState([])
  const [question, setQuestion] = useState()
  const [when, setWhen] = useState()

  const getNewDay = () => {
    const randomDate = getRandomDate('2021-01-01', '2024-12-31')
    const range = generateDateRange(randomDate)

    const emp = []
    for (let i = 1; i <= range[0].dayNumber; i++) {
      emp.push(i)
    }

    const randomQuestion = randomFromArray(questions)
    const randomWhen = randomFromArray(Object.keys(dayPrepositions))

    setQuestion(randomQuestion)
    setWhen(randomWhen)
    setSelectedDate(randomDate)
    setDates(range)
    setEmpty(emp)
  }

  const checkAnswer = (userAnswer) => {
    const factor = dayPrepositions[when].days
    const responseDate = factor !== 0 ? addDays(selected, factor) : selected

    const tanggalRightAnswers = [
      dateToText(format(responseDate, 'yyyy-MM-dd')),
      `${when} tanggal ${dateToText(format(responseDate, 'yyyy-MM-dd'))}`
    ]

    const hariRightAnswers = [
      days[getDay(responseDate)].indonesian,
      `${when} hari ${days[getDay(responseDate)].indonesian}`
    ]

    const condition = question.startsWith('Tanggal berapa')
      ? tanggalRightAnswers.includes(formatText(userAnswer))
      : hariRightAnswers.includes(formatText(userAnswer))

    if (condition) {
      toast.success('Correct!', { id: 'toastid' })
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            <Tooltip id="my-tooltip" />
            <img
              src={image}
              className="w-full border-b-2 pb-3 mb-3"
              alt="screenshot"
            />
            <p className="text-blue-600 text-center mb-1">
              What is inside the parentheses is optional.
            </p>
            <p className="font-medium text-lg">
              Your answer:{' '}
              <span className="text-red-700 font-normal">{formatText(userAnswer)}</span>
            </p>
            <p className="font-medium text-lg">
              Right answer:{' '}
              <span className="text-green-700 font-normal">
                {question.startsWith('Tanggal') ? (
                  <span>
                    <span>
                      (<TooltipText content={dayPrepositions[when].english}>{when}</TooltipText>{' '}
                      tanggal)
                    </span>{' '}
                    {tanggalRightAnswers[0]}
                  </span>
                ) : (
                  <span>
                    <span>
                      (<TooltipText content={dayPrepositions[when].english}>{when}</TooltipText>{' '}
                      hari)
                    </span>{' '}
                    {hariRightAnswers[0]}
                  </span>
                )}
              </span>
            </p>
          </Toast>
        ),
        { duration: Infinity, id: 'toastid' }
      )
      wrongSound.play()
    }

    getNewDay()
  }

  useEffect(() => {
    getNewDay()
  }, [])

  return { selected, dates, checkAnswer, empty, question, when, takeScreenshot }
}
