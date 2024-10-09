import { useEffect, useState } from 'react'
import { patterns as initData } from '@data/patterns'

export const usePattern = () => {
  const [patterns, setPatterns] = useState([])
  const [selected, setSelected] = useState(null)

  const changePattern = (id) => {
    setSelected(patterns.find((el) => el.id === id))
  }

  useEffect(() => {
    setPatterns(initData)
  }, [])

  useEffect(() => {
    setSelected(patterns[0])
  }, [patterns])

  return { selected, changePattern }
}
