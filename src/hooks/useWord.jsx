import { useEffect, useState } from 'react'
import Help from '@components/Help'
import { alphabet } from '@data/alphabet'
import { vocabulary } from '@data/vocabulary'
import { randomFromArray } from '@lib/getRandom'
import { correctSound, wrongSound } from '@lib/sounds'
import { toast } from '@lib/toast'
import { formatText } from '@lib/tools'

const spellWord = (word = '') => {
  const letters = word.split('')

  let spelling = []

  letters.map((letter) => {
    spelling.push(alphabet[letter])
  })

  return spelling.join(' ')
}

const wordsToSpell = Object.values(vocabulary)
  .flat()
  .filter((el) => el.indonesian.split(' ').length === 1)
  .map((el) => el.indonesian)

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
        <Help>
          <Help.Title className="mb-3">{selected.word}</Help.Title>
          <Help.Wrong>{formatText(userAnswer)}</Help.Wrong>
          <Help.Correct>{selected.spelling}</Help.Correct>
        </Help>
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
