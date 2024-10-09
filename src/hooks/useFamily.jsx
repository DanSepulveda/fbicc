import { useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'
import { useScreenshot } from 'use-react-screenshot'
import Help from '@components/Help'
import TooltipText from '@components/TooltipText'
import { relationship } from '@data/relationship'
import { getRandomNumber, shuffleArray } from '@lib/getRandom'
import { getWordsByTag } from '@lib/getWords'
import { correctSound, wrongSound } from '@lib/sounds'
import { toast } from '@lib/toast'

let allAnswers = {}
getWordsByTag('awf').forEach((el) => (allAnswers[el.indonesian] = el.english))

const createAnswers = (correctAnswer) => {
  let answers = []

  if (correctAnswer.length > 1) {
    const randomIndex = getRandomNumber(0, correctAnswer.length - 1)
    answers.push(correctAnswer[randomIndex])
  } else {
    answers.push(correctAnswer[0])
  }

  while (answers.length < 4) {
    const index = getRandomNumber(0, Object.keys(allAnswers).length - 1)
    const element = Object.keys(allAnswers)[index]

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
  } while (
    (member - me === 0) |
    ((me === 3) & (member === 5)) |
    ((me === 3) & (member === 6)) |
    ((me === 4) & (member === 6)) |
    ((me === 5) & (member === 3)) |
    ((me === 6) & (member === 3)) |
    ((me === 6) & (member === 4))
  )
  return [me, member]
}

export const useFamily = () => {
  const [image, takeScreenshot] = useScreenshot()
  const [relation, setRelation] = useState({
    me: null,
    member: null,
    relation: []
  })
  const [answers, setAnswers] = useState([])

  const getNewRelation = () => {
    const [person1, person2] = getMembers()
    const relation = relationship[person1][person2]

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
        <Help>
          <Tooltip id="my-tooltip" />
          <img
            src={image}
            className="w-full border-b-2 pb-3 mb-3"
            alt="screenshot"
          />
          <Help.Wrong>
            <TooltipText
              className="text-red-700 font-normal"
              content={allAnswers[userAnswer]}
            >
              {userAnswer}
            </TooltipText>
          </Help.Wrong>
          <Help.Correct>
            <span className="text-green-700 font-normal">
              {relation.relation.map((el, index) => {
                return (
                  <TooltipText
                    key={el}
                    content={allAnswers[el]}
                  >
                    <span className="underline">{el}</span>
                    {relation.relation.length - 1 !== index ? ', ' : ''}
                  </TooltipText>
                )
              })}
            </span>
          </Help.Correct>
        </Help>
      )
      wrongSound.play()
    }

    getNewRelation()
  }

  useEffect(() => {
    getNewRelation()
  }, [])

  return { relation, answers, checkAnswer, takeScreenshot }
}
