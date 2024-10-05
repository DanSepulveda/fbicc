import { useEffect, useState } from 'react'

export const useFetch = (initial, url) => {
  const [data, setData] = useState(initial)

  const fetchData = async (url) => {
    try {
      const rawData = await fetch(url)
      const data = await rawData.json()
      setData(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, setData]
}
