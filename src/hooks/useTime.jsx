import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getRandomNumber, getRandomTime, shuffleArray } from '../lib/getRandom'
import { timeToText } from '../lib/getTextTime'
import { correctSound, wrongSound } from '../lib/sounds'
import { formatText } from '../lib/tools'
import Toast from '../components/Toast'

const createAnswers = (correctAnswer) => {
  let answers = []
  answers.push(correctAnswer)
  const hour = Number(correctAnswer.split(':')[0])
  const minute = Number(correctAnswer.split(':')[1])
  const number = hour === 12 ? 1 : hour + 1
  answers.push(`${number}:${minute < 10 ? '0' + minute : minute}`)
  answers.push(`${hour}:${60 - minute < 10 ? '0' + 60 - minute : 60 - minute}`)
  answers.push(`${number}:${60 - minute < 10 ? '0' + 60 - minute : 60 - minute}`)

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
    if (selected.text.includes(formatText(userAnswer)) || selected.digit === userAnswer) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            {userAnswer.includes(':') ? (
              <p className="font-medium text-xl text-center border-b mb-2 text-blue-700">
                {selected.displayText}
              </p>
            ) : null}
            <p className="font-medium text-lg">
              Your answer:{' '}
              <span className="text-red-700 font-normal">{formatText(userAnswer)}</span>
            </p>
            <p className="font-medium text-lg">
              Right answer:{' '}
              <span className="text-green-700 font-normal">
                {userAnswer.includes(':') ? selected.digit : selected.text.join(', ')}
              </span>
            </p>
          </Toast>
        ),
        { duration: 6000 }
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
