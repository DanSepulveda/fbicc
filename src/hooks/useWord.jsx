import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { randomFromArray } from '../lib/getRandom'
import { correctSound, wrongSound } from '../lib/sounds'
import { formatText } from '../lib/tools'
import { alphabet, wordsToSpell } from '../data/spellingWords'
import Toast from '../components/Toast'

const spellWord = (word = '') => {
  const letters = word.split('')

  let spelling = []

  letters.map((letter) => {
    spelling.push(alphabet[letter])
  })

  return spelling.join(' ')
}

export const useWord = () => {
  const [words, setWords] = useState(wordsToSpell)
  const [selected, setSelected] = useState({
    word: '',
    spelling: ''
  })

  const getNewWord = () => {
    const word = randomFromArray(words) ?? ''

    setSelected({
      word,
      spelling: spellWord(word)
    })
  }

  const deleteWord = (deletedWord) => {
    const remaining = words.filter((word) => word !== deletedWord)
    remaining.length ? setWords(remaining) : setWords(wordsToSpell)
  }

  const checkAnswer = (userAnswer) => {
    if (formatText(userAnswer) === formatText(selected.spelling)) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            <p className="font-medium text-xl text-center border-b mb-2 text-blue-700">
              {selected.word}
            </p>
            <p className="font-medium text-lg">
              Your answer:{' '}
              <span className="text-red-700 font-normal">{formatText(userAnswer)}</span>{' '}
            </p>
            <p className="font-medium text-lg">
              Right answer: <span className="text-green-700 font-normal">{selected.spelling}</span>
            </p>
          </Toast>
        ),
        { duration: 6000 }
      )
      wrongSound.play()
    }

    deleteWord(selected.word)
  }

  useEffect(() => {
    getNewWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words])

  return { selected, checkAnswer }
}
