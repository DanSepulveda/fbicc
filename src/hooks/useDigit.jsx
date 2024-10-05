import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { getRandomNumber } from '../lib/getRandom'
import { numberToText } from '../lib/getTextNumber'
import { correctSound, wrongSound } from '../lib/sounds'
import { formatText, isNumber, isString } from '../lib/tools'
import Toast from '../components/Toast'

export const useDigit = () => {
  const [selected, setSelected] = useState({
    digit: null,
    text: ''
  })

  const getNewNumber = () => {
    const number = getRandomNumber(0, 1000)

    setSelected({
      digit: number,
      text: numberToText(number)
    })
  }

  const checkAnswer = (userAnswer) => {
    if (
      (isString(userAnswer) && formatText(userAnswer) === formatText(selected.text)) ||
      (isNumber(userAnswer) && userAnswer === selected.digit)
    ) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            <p className="font-medium text-lg">
              Your answer: <span className="text-red-700 font-normal">{userAnswer}</span>{' '}
            </p>
            <p className="font-medium text-lg">
              Right answer:{' '}
              <span className="text-green-700 font-normal">
                {isString(userAnswer) ? selected.text : selected.digit}
              </span>
            </p>
          </Toast>
        ),
        { duration: Infinity }
      )
      wrongSound.play()
    }

    getNewNumber()
  }

  useEffect(() => {
    getNewNumber()
  }, [])

  return { selected, checkAnswer }
}
