import { useState } from 'react'

export const useRandomTime = () => {
  const [time, setTime] = useState()
  return [time, setTime]
}
