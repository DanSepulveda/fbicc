import { useEffect, useState } from 'react'

export const useFetch = (url, initial = []) => {
  const [data, setData] = useState(initial)
  const [loading, setLoading] = useState(true)

  const fetchData = async (url) => {
    try {
      const rawData = await fetch(url)
      const data = await rawData.json()
      setData(data)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading]
}
