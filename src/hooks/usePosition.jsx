import { useEffect, useState } from 'react'
import Help from '@components/Help'
import { allObjects, allPositions } from '@data/position'
import { shuffleArray } from '@lib/arrayUtils'
import { getRandomNumber } from '@lib/numberUtils'
import { sanitizeText } from '@lib/stringUtils'
import { toast } from '@lib/toast'
import { correctSound, wrongSound } from '@lib/sounds'

const createAnswers = (correctAnswer) => {
  let answers = []
  answers.push(correctAnswer)

  while (answers.length < 4) {
    const index = getRandomNumber(0, allPositions.length - 1)
    const element = allPositions[index]

    if (!answers.includes(element)) {
      answers.push(element)
    }
  }

  return shuffleArray(answers)
}

export const usePosition = () => {
  const [selected, setSelected] = useState({
    main: '',
    position: '',
    secondary: '',
    fullResponse: ''
  })
  const [answers, setAnswers] = useState([])

  const getNewObject = () => {
    const main = allObjects[getRandomNumber(0, allObjects.length - 1)]
    const filtered = [...allObjects].filter((el) => el.name !== main.name)
    const position = allPositions[getRandomNumber(0, allPositions.length - 1)]
    const secondary = filtered[getRandomNumber(0, filtered.length - 1)]

    setSelected({
      main,
      position,
      secondary,
      fullResponse: [
        `${main.name} itu di ${position} ${secondary.name}`,
        `${main.name} di ${position} ${secondary.name}`
      ]
    })

    setAnswers(createAnswers(position))
  }

  const checkAnswer = (userAnswer, full = false) => {
    let condition = selected.position === userAnswer
    if (full) {
      condition = selected.fullResponse.includes(sanitizeText(userAnswer))
    }

    if (condition) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        <Help>
          <Help.Wrong>{userAnswer}</Help.Wrong>
          <Help.Correct>{full ? selected.fullResponse.join(', ') : selected.position}</Help.Correct>
        </Help>
      )
      wrongSound.play()
    }

    getNewObject()
  }

  useEffect(() => {
    getNewObject()
  }, [])

  return { selected, answers, checkAnswer }
}
