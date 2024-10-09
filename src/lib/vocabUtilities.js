import { vocabulary } from '@data/vocabulary'

export const getWordsByTag = (tag) => {
  return Object.values(vocabulary)
    .flat()
    .filter((el) => el.tags.includes(tag))
}

export const getMeaning = (word) => {
  const meaning = Object.values(vocabulary)
    .flat()
    .find((el) => el.indonesian === word.toLowerCase())

  return meaning?.english ?? ''
}
