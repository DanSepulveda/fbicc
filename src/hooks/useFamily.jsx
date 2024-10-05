import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getRandomNumber, shuffleArray } from '../lib/getRandom'
import { correctSound, wrongSound } from '../lib/sounds'
import Toast from '../components/Toast'

const relationShips = {
  1: {
    1: null,
    2: ['istri'],
    3: ['menantu laki-laki'],
    4: ['anak perempuan', 'anak'],
    5: ['anak laki-laki', 'anak'],
    6: ['menantu perempuan'],
    7: ['cucu laki-laki', 'cucu'],
    8: ['cucu perempuan', 'cucu'],
    9: ['cucu laki-laki', 'cucu'],
    10: ['cucu perempuan', 'cucu'],
    11: ['cucu laki-laki', 'cucu'],
    12: ['cucu perempuan', 'cucu']
  },
  2: {
    1: ['suami'],
    2: null,
    3: ['menantu laki-laki'],
    4: ['anak perempuan', 'anak'],
    5: ['anak laki-laki', 'anak'],
    6: ['menantu perempuan'],
    7: ['cucu laki-laki', 'cucu'],
    8: ['cucu perempuan', 'cucu'],
    9: ['cucu laki-laki', 'cucu'],
    10: ['cucu perempuan', 'cucu'],
    11: ['cucu laki-laki', 'cucu'],
    12: ['cucu perempuan', 'cucu']
  },
  3: {
    1: ['ayah mertua'],
    2: ['ibu mertua'],
    3: null,
    4: ['istri'],
    5: [],
    6: [],
    7: ['anak sulung', 'anak laki-laki', 'anak'],
    8: ['anak tengah', 'anak perempuan', 'anak'],
    9: ['anak bungsu', 'anak laki-laki', 'anak'],
    10: ['keponakan perempuan', 'keponakan'],
    11: ['keponakan laki-laki', 'keponakan'],
    12: ['keponakan perempuan', 'keponakan']
  },
  4: {
    1: ['ayah'],
    2: ['ibu'],
    3: ['suami'],
    4: null,
    5: ['saudara laki-laki'],
    6: [],
    7: ['anak sulung', 'anak laki-laki', 'anak'],
    8: ['anak tengah', 'anak perempuan', 'anak'],
    9: ['anak bungsu', 'anak laki-laki', 'anak'],
    10: ['keponakan perempuan', 'keponakan'],
    11: ['keponakan laki-laki', 'keponakan'],
    12: ['keponakan perempuan', 'keponakan']
  },
  5: {
    1: ['ayah'],
    2: ['ibu'],
    3: [],
    4: ['saudara perempuan'],
    5: null,
    6: ['istri'],
    7: ['keponakan laki-laki', 'keponakan'],
    8: ['keponakan perempuan', 'keponakan'],
    9: ['keponakan laki-laki', 'keponakan'],
    10: ['anak sulung', 'anak perempuan', 'anak'],
    11: ['anak tengah', 'anak laki-laki', 'anak'],
    12: ['anak bungsu', 'anak perempuan', 'anak']
  },
  6: {
    1: ['ayah mertua'],
    2: ['ibu mertua'],
    3: [],
    4: [],
    5: ['suami'],
    6: null,
    7: ['keponakan laki-laki', 'keponakan'],
    8: ['keponakan perempuan', 'keponakan'],
    9: ['keponakan laki-laki', 'keponakan'],
    10: ['anak sulung', 'anak perempuan', 'anak'],
    11: ['anak tengah', 'anak laki-laki', 'anak'],
    12: ['anak bungsu', 'anak perempuan', 'anak']
  },
  7: {
    1: ['kakek'],
    2: ['nenek'],
    3: ['ayah'],
    4: ['ibu'],
    5: ['paman'],
    6: ['bibi'],
    7: null,
    8: ['saudara perempuan', 'adik perempuan'],
    9: ['saudara laki-laki', 'adik laki-laki'],
    10: ['sepupu perempuan'],
    11: ['sepupu laki-laki'],
    12: ['sepupu perempuan']
  },
  8: {
    1: ['kakek'],
    2: ['nenek'],
    3: ['ayah'],
    4: ['ibu'],
    5: ['paman'],
    6: ['bibi'],
    7: ['saudara laki-laki', 'kakak laki-laki'],
    8: null,
    9: ['saudara laki-laki', 'adik laki-laki'],
    10: ['sepupu perempuan'],
    11: ['sepupu laki-laki'],
    12: ['sepupu perempuan']
  },
  9: {
    1: ['kakek'],
    2: ['nenek'],
    3: ['ayah'],
    4: ['ibu'],
    5: ['paman'],
    6: ['bibi'],
    7: ['saudara laki-laki', 'kakak laki-laki'],
    8: ['saudara perempuan', 'kakak perempuan'],
    9: null,
    10: ['sepupu perempuan'],
    11: ['sepupu laki-laki'],
    12: ['sepupu perempuan']
  },
  10: {
    1: ['kakek'],
    2: ['nenek'],
    3: ['paman'],
    4: ['bibi'],
    5: ['ayah'],
    6: ['ibu'],
    7: ['sepupu laki-laki'],
    8: ['sepupu perempuan'],
    9: ['sepupu laki-laki'],
    10: null,
    11: ['saudara laki-laki', 'adik laki-laki'],
    12: ['saudara perempuan', 'adik perempuan']
  },
  11: {
    1: ['kakek'],
    2: ['nenek'],
    3: ['paman'],
    4: ['bibi'],
    5: ['ayah'],
    6: ['ibu'],
    7: ['sepupu laki-laki'],
    8: ['sepupu perempuan'],
    9: ['sepupu laki-laki'],
    10: ['saudara perempuan', 'kakak perempuan'],
    11: null,
    12: ['saudara perempuan', 'adik perempuan']
  },
  12: {
    1: ['kakek'],
    2: ['nenek'],
    3: ['paman'],
    4: ['bibi'],
    5: ['ayah'],
    6: ['ibu'],
    7: ['sepupu laki-laki'],
    8: ['sepupu perempuan'],
    9: ['sepupu laki-laki'],
    10: ['saudara perempuan', 'kakak perempuan'],
    11: ['saudara laki-laki', 'kakak laki-laki'],
    12: null
  }
}

const allAnswers = [
  'adik laki-laki',
  'adik perempuan',
  'anak',
  'anak bungsu',
  'anak laki-laki',
  'anak perempuan',
  'anak sulung',
  'anak tengah',
  'ayah',
  'ayah mertua',
  'bibi',
  'cucu',
  'cucu laki-laki',
  'cucu perempuan',
  'ibu',
  'ibu mertua',
  'istri',
  'kakek',
  'keponakan',
  'keponakan laki-laki',
  'keponakan perempuan',
  'menantu laki-laki',
  'menantu perempuan',
  'nenek',
  'paman',
  'saudara laki-laki',
  'saudara perempuan',
  'sepupu laki-laki',
  'sepupu perempuan',
  'suami'
]

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
  const [toggle, setToggle] = useState(true)

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

    setToggle(!toggle)
  }

  useEffect(() => {
    const [person1, person2] = getMembers()
    const relation = relationShips[person1][person2]

    setRelation({
      me: person1,
      member: person2,
      relation
    })

    setAnswers(createAnswers(relation))
  }, [toggle])

  return { relation, answers, checkAnswer }
}
