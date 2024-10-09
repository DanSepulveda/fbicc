import { useEffect, useState } from 'react'
import Help from '@components/Help'
import { getRandomNumber, isNumber, numberToText } from '@lib/numberUtils'
import { isString, sanitizeText } from '@lib/stringUtils'
import { toast } from '@lib/toast'
import { correctSound, wrongSound } from '@lib/sounds'

export const useDigit = () => {
  const [selected, setSelected] = useState({
    digit: null,
    text: ''
  })
  const [limit, setLimit] = useState(1000)

  const getNewNumber = () => {
    const number = getRandomNumber(0, limit)

    setSelected({
      digit: number,
      text: numberToText(number)
    })
  }

  const checkAnswer = (userAnswer) => {
    let condition = null

    if (isString(userAnswer)) {
      condition = sanitizeText(userAnswer) === sanitizeText(selected.text)
    }

    if (isNumber(userAnswer)) {
      condition = userAnswer === selected.digit
    }

    if (condition) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        <Help>
          <Help.Title className="mb-3">
            {isNumber(userAnswer) ? selected.text : selected.digit}
          </Help.Title>
          <Help.Wrong>{sanitizeText(userAnswer)}</Help.Wrong>
          <Help.Correct>{isString(userAnswer) ? selected.text : selected.digit}</Help.Correct>
        </Help>
      )
      wrongSound.play()
    }

    getNewNumber()
  }

  useEffect(() => {
    getNewNumber()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit])

  return { selected, checkAnswer, limit, setLimit }
}
