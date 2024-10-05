import { numberToText } from './getTextNumber'

export const timeToText = (time) => {
  const hour = Number(time.split(':')[0])
  const minute = Number(time.split(':')[1])

  let answers = []

  if (minute === 0) {
    answers.push(`jam ${numberToText(hour)}`)
  }

  if (minute !== 0) {
    answers.push(`jam ${numberToText(hour)} lebih ${numberToText(minute)}`)
  }

  if (minute !== 0) {
    const number = hour === 12 ? 1 : hour + 1
    answers.push(`jam ${numberToText(number)} kurang ${numberToText(60 - minute)}`)
  }

  return answers
}
