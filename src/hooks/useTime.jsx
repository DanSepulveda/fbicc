import { useEffect, useState } from 'react'
import Help from '@components/Help'
import { toast } from '@lib/toast'
import { shuffleArray } from '@lib/arrayUtils'
import { getRandomTime, timeToText } from '@lib/dateUtils'
import { getRandomNumber } from '@lib/numberUtils'
import { sanitizeText } from '@lib/stringUtils'
import { correctSound, wrongSound } from '@lib/sounds'

const createAnswers = (correctAnswer) => {
  let answers = []
  answers.push(correctAnswer)
  const hour = Number(correctAnswer.split(':')[0])
  const minute = Number(correctAnswer.split(':')[1])
  const number = hour === 12 ? 1 : hour + 1
  answers.push(`${number}:${minute < 10 ? '0' + minute : minute}`)
  answers.push(`${hour}:${minute > 50 ? '0'.concat(60 - minute) : 60 - minute}`)
  answers.push(`${number}:${minute > 50 ? '0'.concat(60 - minute) : 60 - minute}`)
  return shuffleArray(answers)
}

export const useTime = () => {
  const [selected, setSelected] = useState({
    digit: '',
    text: [],
    displayText: ''
  })
  const [answers, setAnswers] = useState([])

  const getNewTime = () => {
    const time = getRandomTime()
    const text = timeToText(time)

    setSelected({
      digit: time,
      text,
      displayText: text[getRandomNumber(0, text.length - 1)]
    })

    setAnswers(createAnswers(time))
  }

  const checkAnswer = (userAnswer) => {
    if (selected.text.includes(sanitizeText(userAnswer)) || selected.digit === userAnswer) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        <Help>
          <Help.Title className="mb-3">
            {userAnswer.includes(':') ? selected.displayText : selected.digit}
          </Help.Title>
          <Help.Wrong>{sanitizeText(userAnswer)}</Help.Wrong>
          <Help.Correct>
            {userAnswer.includes(':') ? selected.digit : selected.text.join(', ')}
          </Help.Correct>
        </Help>
      )
      wrongSound.play()
    }

    getNewTime()
  }

  useEffect(() => {
    getNewTime()
  }, [])

  return { selected, checkAnswer, answers }
}
