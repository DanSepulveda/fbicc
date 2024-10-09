import { addDays, getDate, getDay, getMonth, getYear, subDays } from 'date-fns'
import { months } from '@data/date'
import { getRandomNumber, numberToText } from './numberUtils'

export const getRandomDate = (startDate, endDate) => {
  const start = new Date(startDate).getTime()
  const end = new Date(endDate).getTime()
  const randomTime = start + Math.random() * (end - start)

  return new Date(randomTime)
}

export const generateDateRange = (centerDate) => {
  const dates = []

  for (let i = 14; i > 0; i--) {
    const date = subDays(centerDate, i)
    dates.push(date)
  }

  dates.push(centerDate)

  for (let i = 1; i <= 14; i++) {
    const date = addDays(centerDate, i)
    dates.push(date)
  }

  return dates.map((date) => {
    return {
      fullDate: date,
      dayNumber: getDay(date),
      year: getYear(date),
      month: getMonth(date),
      day: getDate(date)
    }
  })
}

export const dateToText = (dateString) => {
  const [year, month, day] = dateString.split('-')
  return `${numberToText(Number(day))} ${months[Number(month - 1)]} ${numberToText(Number(year))}`
}

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

  if (minute !== 0 && minute > 30) {
    const number = hour === 12 ? 1 : hour + 1
    answers.push(`jam ${numberToText(number)} kurang ${numberToText(60 - minute)}`)
  }

  return answers
}

export const getRandomTime = () => {
  const hour = getRandomNumber(1, 12)
  const minute = getRandomNumber(0, 59)

  const formattedMinute = minute < 10 ? '0' + minute : minute

  return `${hour}:${formattedMinute}`
}
