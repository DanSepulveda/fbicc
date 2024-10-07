import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getRandomNumber, shuffleArray } from '../lib/getRandom'
import { correctSound, wrongSound } from '../lib/sounds'
import { allObjects, allPositions } from '../data/position'
import { formatText } from '../lib/tools'
import Toast from '../components/Toast'

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
      condition = selected.fullResponse.includes(formatText(userAnswer))
    }

    if (condition) {
      toast.success('Correct!', { id: 'toastid' })
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
                {full ? selected.fullResponse.join(', ') : selected.position}
              </span>
            </p>
          </Toast>
        ),
        { duration: 6000, id: 'toastid' }
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
