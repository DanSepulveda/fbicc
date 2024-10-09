import { useEffect, useState } from 'react'
import { addDays, format, getDay } from 'date-fns'
import { useScreenshot } from 'use-react-screenshot'
import { Tooltip } from 'react-tooltip'
import Help from '@components/Help'
import TooltipText from '@components/TooltipText'
import { dayPrepositions, days } from '@data/date'
import { randomFromArray } from '@lib/arrayUtils'
import { dateToText, generateDateRange, getRandomDate } from '@lib/dateUtils'
import { sanitizeText } from '@lib/stringUtils'
import { correctSound, wrongSound } from '@lib/sounds'
import { toast } from '@lib/toast'

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

    const randomQuestion = randomFromArray(['Tanggal berapa', 'Tanggal berapa', 'Hari apa'])
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
      ? tanggalRightAnswers.includes(sanitizeText(userAnswer))
      : hariRightAnswers.includes(sanitizeText(userAnswer))

    if (condition) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        <Help>
          <Tooltip id="my-tooltip" />
          <img
            src={image}
            className="w-full border-b-2 pb-3 mb-3"
            alt="screenshot"
          />
          <p className="text-blue-600 text-center mb-1">
            What is inside the parentheses is optional.
          </p>
          <Help.Wrong>{sanitizeText(userAnswer)}</Help.Wrong>
          <Help.Correct>
            (<TooltipText content={dayPrepositions[when].english}>{when}</TooltipText>
            {question.startsWith('Tanggal')
              ? ` tanggal) ${tanggalRightAnswers[0]}`
              : ` hari) ${hariRightAnswers[0]}`}
          </Help.Correct>
        </Help>
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
