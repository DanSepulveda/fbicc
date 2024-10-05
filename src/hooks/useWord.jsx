import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Toast from '../components/Toast'
import { randomFromArray } from '../lib/getRandom'
import { correctSound, wrongSound } from '../lib/sounds'

const alphabet = {
  a: 'a',
  b: 'be',
  c: 'ce',
  d: 'de',
  e: 'e',
  f: 'ef',
  g: 'ge',
  h: 'ha',
  i: 'i',
  j: 'je',
  k: 'ka',
  l: 'el',
  m: 'em',
  n: 'en',
  o: 'o',
  p: 'pe',
  q: 'qi',
  r: 'er',
  s: 'es',
  t: 'te',
  u: 'u',
  v: 've',
  w: 'we',
  x: 'ex',
  y: 'ye',
  z: 'zet'
}

const spellWord = (word = '') => {
  const letters = word.split('')

  let spelling = []

  letters.map((letter) => {
    spelling.push(alphabet[letter])
  })

  return spelling.join(' ')
}

// TODO: check styles
export const useWord = (initData) => {
  const [words, setWords] = useState([])
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
    setWords(words.filter((word) => word !== deletedWord))
  }

  const checkAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase().trim() === selected.spelling.toLowerCase().trim()) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            <p className="font-medium text-lg">
              Your answer: <span className="text-red-700">{userAnswer}</span>{' '}
            </p>
            <p className="font-medium text-lg">
              Right answer: <span className="text-green-700">{selected.spelling}</span>
            </p>
          </Toast>
        ),
        { duration: Infinity }
      )
      wrongSound.play()
    }

    deleteWord(selected.word)
  }

  useEffect(() => {
    setWords(initData)
  }, [initData])

  useEffect(() => {
    getNewWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words])

  return { selected, checkAnswer }
}
