import { useEffect, useState } from 'react'
import Help from '@components/Help'
import { getRandomNumber } from '@lib/getRandom'
import { numberToText } from '@lib/getTextNumber'
import { correctSound, wrongSound } from '@lib/sounds'
import { toast } from '@lib/toast'
import { formatText, isNumber, isString } from '@lib/tools'

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
      condition = formatText(userAnswer) === formatText(selected.text)
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
          <Help.Wrong>{formatText(userAnswer)}</Help.Wrong>
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
