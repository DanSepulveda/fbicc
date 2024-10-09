/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { format, getMonth, getYear } from 'date-fns'
import { Tooltip } from 'react-tooltip'
import { useDate } from '@hooks/useDate'
import Button from '@components/Button'
import Help from '@components/Help'
import Highlight from '@components/Highlight'
import Input from '@components/Input'
import TooltipText from '@components/TooltipText'
import { dayPrepositions, days, months } from '@data/date'

export const DatePageHelp = () => {
  return (
    <Help>
      <Help.Title>Answer format</Help.Title>
      <Help.Subtitle>
        Tanggal berapa <Highlight>hari ini</Highlight>? (08/05/2023)
      </Help.Subtitle>
      <Help.List>
        <Help.ListItem>delapan mei dua ribu dua puluh tiga</Help.ListItem>
        <Help.ListItem>
          <Highlight>hari ini tanggal</Highlight> delapan mei dua ribu dua puluh tiga
        </Help.ListItem>
      </Help.List>
      <Help.Subtitle>
        Hari apa <Highlight color="green">kemarin</Highlight>? (monday)
      </Help.Subtitle>
      <Help.List>
        <Help.ListItem>senin</Help.ListItem>
        <Help.ListItem>
          <Highlight color="green">kemarin hari</Highlight> senin
        </Help.ListItem>
      </Help.List>
    </Help>
  )
}

const DatePage = () => {
  const { selected, dates, empty, question, when, checkAnswer, takeScreenshot } = useDate()
  const ref = useRef(null)

  useEffect(() => {
    takeScreenshot(ref.current)
  }, [selected])

  if (!selected | !dates.length) {
    return <div ref={ref}></div>
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.response.value
    if (userAnswer) {
      checkAnswer(userAnswer)
      event.target.reset()
      event.target.focus()
    }
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <div
        className="border border-gray-800"
        ref={ref}
      >
        <h2 className="text-2xl font-bold text-center bg-gray-800 text-white py-1 font-ubuntu">
          {getYear(selected)}
        </h2>
        <div className="grid grid-cols-7 bg-gray-700 py-0.5 text-white font-ubuntu">
          {days.map((day) => (
            <TooltipText
              key={day.indonesian}
              className="text-center font-medium"
              content={day.indonesian}
            >
              {day.english}
            </TooltipText>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 p-1">
          {empty.map((el) => (
            <div key={el}></div>
          ))}
          {dates.map((date, index) => (
            <div
              key={index}
              className={`text-center rounded flex flex-col font-medium ${
                date.fullDate === selected ? 'bg-teal-600 text-white font-bold' : 'bg-gray-200'
              }`}
            >
              <TooltipText content={months[getMonth(date.fullDate)]}>
                {format(date.fullDate, 'MMM')}
              </TooltipText>
              <span className={date.fullDate === selected ? 'text-white' : 'text-gray-500'}>
                {date.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-2xl font-medium mt-6 bg-red-800 py-2 rounded text-white">
        <span>{question} </span>
        <TooltipText content={dayPrepositions[when].english}>{when}</TooltipText>
        <span> ?</span>
      </p>
      <form
        className="flex flex-col gap-4 mt-3"
        onSubmit={handleSubmit}
      >
        <Input
          name="response"
          placeholder="Contoh: sekarang tanggal dua mei dua ribu dua puluh satu"
          label={<TooltipText content="jabawan = answer">Jabawan</TooltipText>}
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default DatePage
