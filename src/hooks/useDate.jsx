import { useEffect, useState } from 'react'
import { getRandomDate, randomFromArray } from '../lib/getRandom'
import { dateToText, generateDateRange } from '../lib/rangeDate'
import { dayPrepositions, days, questions } from '../data/date'
import { addDays, format, getDay } from 'date-fns'
import { formatText } from '../lib/tools'
import toast from 'react-hot-toast'
import { correctSound, wrongSound } from '../lib/sounds'
import Toast from '../components/Toast'

export const useDate = () => {
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
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            <p className="font-medium text-xl text-center border-b mb-2 text-blue-700">
              {userAnswer.includes(':') ? selected.displayText : selected.digit}
            </p>
            <p className="font-medium text-lg">
              Your answer:{' '}
              <span className="text-red-700 font-normal">{formatText(userAnswer)}</span>
            </p>
            <p className="font-medium text-lg">
              Right answer:{' '}
              <span className="text-green-700 font-normal">
                {question.startsWith('Tanggal')
                  ? tanggalRightAnswers.join(', ')
                  : hariRightAnswers.join(', ')}
              </span>
            </p>
          </Toast>
        ),
        { duration: 6000 }
      )
      wrongSound.play()
    }

    getNewDay()
  }

  useEffect(() => {
    getNewDay()
  }, [])

  return { selected, dates, checkAnswer, empty, question, when }
}
