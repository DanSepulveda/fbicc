import { useEffect, useState } from 'react'
import { vocabulary } from '@data/vocabulary'
import { shuffleWords } from '@lib/getRandom'
import { correctSound, wrongSound } from '@lib/sounds'
import { isEmptyObj } from '@lib/tools'

const getValuesByKeys = (obj, keys) => {
  return keys.map((key) => obj[key]).flat()
}

const initChecks = ['class2', 'class3', 'class4', 'class5', 'class6']
const initWords = getValuesByKeys(vocabulary, initChecks)

export const useVocabulary = () => {
  const [allWords, setAllWords] = useState(initWords)
  const [selectedChecks, setSelectedChecks] = useState(initChecks)
  const [selectedSet, setSelectedSet] = useState([]) // [{indonesian: 'buku', english: 'book}]
  const [selectedWords, setSelectedWords] = useState([]) // [{lang: 'english', word: 'book', state: 'normal'}]
  const [firstWord, setFirstWord] = useState({}) //{lang: 'english', word: 'book', state: 'normal'}
  const [pairs, setPairs] = useState([])

  const finishRound = () => {
    //   reset
    setPairs([])
    setFirstWord({})

    let newAllWords
    if (selectedSet.length) {
      const idsToRemove = new Set(selectedSet.map((item) => item.indonesian))
      newAllWords = allWords.filter((item) => !idsToRemove.has(item.indonesian))
    }

    if (newAllWords.length < 10) {
      newAllWords = getValuesByKeys(vocabulary, selectedChecks)
    }
    setAllWords(newAllWords)
  }

  const getNewSet = () => {
    const newSet = shuffleWords(allWords).slice(0, 10)

    const newWords = []
    newSet.map((el) => {
      newWords.push({
        lang: 'english',
        word: el.english,
        state: 'normal'
      })
      newWords.push({
        lang: 'indonesian',
        word: el.indonesian,
        state: 'normal'
      })
    })

    setSelectedSet(newSet)
    setSelectedWords(shuffleWords(newWords))
  }

  const checkAnswer = (userChoice) => {
    if (isEmptyObj(firstWord)) {
      const updatedWords = selectedWords.map((el) => {
        //   'selected' for the chosen word
        if ((el.word === userChoice.word) & (el.lang === userChoice.lang)) {
          return { ...el, state: 'selected' }
        }
        // 'disabled' for same language words
        if ((userChoice.lang === el.lang) & (el.state === 'normal')) {
          return { ...el, state: 'disabled' }
        } else {
          return { ...el }
        }
      })

      setFirstWord(userChoice)
      setSelectedWords(updatedWords)
    } else {
      const indonesianWord = userChoice.lang === 'indonesian' ? userChoice.word : firstWord.word
      const englishWord = userChoice.lang === 'english' ? userChoice.word : firstWord.word

      // look for a correct pair 'indonesian' and 'english'
      const isCorrect = selectedSet.find(
        (el) => (el.indonesian === indonesianWord) & (el.english === englishWord)
      )

      if (isCorrect) {
        const updatedWords = selectedWords.map((el) => {
          // 'completed' for both words
          if ((el.word === userChoice.word) | (el.word === firstWord.word)) {
            return { ...el, state: 'completed' }
          }
          //   'normal' for the rest except 'completed'
          if ((el.state === 'disabled') | (el.state === 'selected')) {
            return { ...el, state: 'normal' }
          }
          return { ...el }
        })
        const newPairs = [...pairs, isCorrect]
        // if (newPairs.length === 10) {
        //   finishRound()
        // }
        setPairs(newPairs)
        setSelectedWords(updatedWords)
        correctSound.play()
      } else {
        const updatedWords = selectedWords.map((el) => {
          // 'normal' for all words except completed
          if (el.state !== 'completed') {
            return { ...el, state: 'normal' }
          }

          return { ...el }
        })
        setSelectedWords(updatedWords)
        wrongSound.play()
      }
      setFirstWord({})
    }
  }

  const handleCheck = (value) => {
    let newChecks = [...selectedChecks]
    const index = selectedChecks.indexOf(value)
    if ((selectedChecks.length === 1) & (index !== -1)) {
      return
    }
    index === -1 ? newChecks.push(value) : newChecks.splice(index, 1)

    const newAllWords = getValuesByKeys(vocabulary, newChecks)

    setAllWords(newAllWords)
    setSelectedChecks(newChecks)
    // reset
    setPairs([])
    setFirstWord({})
  }

  useEffect(() => {
    getNewSet()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allWords])

  return { selectedWords, pairs, checkAnswer, finishRound, selectedChecks, handleCheck }
}
