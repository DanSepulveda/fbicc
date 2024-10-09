import { addDays, getDate, getDay, getMonth, getYear, subDays } from 'date-fns'
import { months } from '@data/date'
import { numberToText } from './numberUtils'

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
