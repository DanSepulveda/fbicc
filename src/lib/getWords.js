import { vocabulary } from '@data/vocabulary'

export const getWordsByTag = (tag) => {
  return Object.values(vocabulary)
    .flat()
    .filter((el) => el.tags.includes(tag))
}
