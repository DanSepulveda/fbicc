import { useEffect, useState } from 'react'
import { getRandomTime } from '../lib/getRandom'
import { timeToText } from '../lib/getTextTime'
import toast from 'react-hot-toast'
import { correctSound, wrongSound } from '../lib/sounds'
import Toast from '../components/Toast'
import { formatText } from '../lib/tools'

export const useTime = () => {
  const [selected, setSelected] = useState({
    digit: '',
    text: []
  })

  const getNewTime = () => {
    const time = getRandomTime()

    setSelected({
      digit: time,
      text: timeToText(time)
    })
  }

  const checkAnswer = (userAnswer) => {
    if (selected.text.includes(formatText(userAnswer))) {
      toast.success('Correct!')
      correctSound.play()
    } else {
      toast.custom(
        (t) => (
          <Toast t={t}>
            <p className="font-medium text-lg">
              Your answer:{' '}
              <span className="text-red-700 font-normal">{formatText(userAnswer)}</span>
            </p>
            <p className="font-medium text-lg">
              Right answer:{' '}
              <span className="text-green-700 font-normal">{selected.text.join(', ')}</span>
            </p>
          </Toast>
        ),
        { duration: 6000 }
      )
      wrongSound.play()
    }

    getNewTime()
  }

  useEffect(() => {
    getNewTime()
  }, [])

  return { selected, checkAnswer }
}
