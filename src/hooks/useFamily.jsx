import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getRandomNumber, shuffleArray } from '../lib/getRandom'
import { correctSound, wrongSound } from '../lib/sounds'
import Toast from '../components/Toast'
import { allAnswers, relationShips } from '../data/family'

const createAnswers = (correctAnswer) => {
  let answers = []

  if (correctAnswer.length > 1) {
    const randomIndex = getRandomNumber(0, correctAnswer.length - 1)
    answers.push(correctAnswer[randomIndex])
  } else {
    answers.push(correctAnswer[0])
  }

  while (answers.length < 4) {
    const index = getRandomNumber(0, allAnswers.length - 1)
    const element = allAnswers[index]

    if (!answers.includes(element)) {
      answers.push(element)
    }
  }

  return shuffleArray(answers)
}

const getMembers = () => {
  const me = getRandomNumber(1, 12)
  let member = null
  do {
    member = getRandomNumber(1, 12)
  } while (member - me === 0)
  return [me, member]
}

export const useFamily = () => {
  const [relation, setRelation] = useState({
    me: null,
    member: null,
    relation: []
  })
  const [answers, setAnswers] = useState([])

  const getNewRelation = () => {
    const [person1, person2] = getMembers()
    const relation = relationShips[person1][person2]

    setRelation({
      me: person1,
      member: person2,
      relation
    })

    setAnswers(createAnswers(relation))
  }

  const checkAnswer = (userAnswer) => {
    if (relation.relation.includes(userAnswer)) {
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
              <span className="text-green-700 font-normal">{relation.relation.join(', ')}</span>
            </p>
          </Toast>
        ),
        { duration: 6000 }
      )
      wrongSound.play()
    }

    getNewRelation()
  }

  useEffect(() => {
    getNewRelation()
  }, [])

  return { relation, answers, checkAnswer }
}
