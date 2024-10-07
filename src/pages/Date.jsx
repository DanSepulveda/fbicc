/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { format, getMonth, getYear } from 'date-fns'
import { Tooltip } from 'react-tooltip'
import { FaCircleQuestion } from 'react-icons/fa6'
import { useDate } from '../hooks/useDate'
import { dayPrepositions, days, months } from '../data/date'
import toast from 'react-hot-toast'
import Button from '../components/Button'
import Input from '../components/Input'

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

  const openHelp = () => {
    toast(
      (t) => (
        <div className="w-100">
          <h2 className="text-center text-2xl font-medium underline">Answer format</h2>
          <h3 className="text-lg mt-3 font-medium text-red-800">
            Tanggal berapa <span className="bg-yellow-400">hari ini</span>? (08/05/2023)
          </h3>
          <div>
            <p className="pl-2">- delapan mei dua ribu dua puluh tiga</p>
            <p className="pl-2">
              - <span className="bg-yellow-400">hari ini tanggal</span> delapan mei dua ribu dua
              puluh tiga
            </p>
          </div>
          <h3 className="text-lg mt-3 font-medium text-red-800">
            Hari apa <span className="bg-green-400">kemarin</span>? (monday)
          </h3>
          <div>
            <p className="pl-2">- senin</p>
            <p className="pl-2">
              - <span className="bg-green-400">kemarin hari</span> senin
            </p>
          </div>
          <div className="mt-4 mx-auto flex justify-center">
            <Button onClick={() => toast.dismiss(t.id)}>Close</Button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        duration: Infinity,
        id: 'toastid'
      }
    )
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <div className="mb-3">
        <FaCircleQuestion
          className="text-blue-900 ml-auto text-xl cursor-pointer hover:text-blue-800"
          onClick={openHelp}
        />
      </div>
      <div
        className="border border-gray-800"
        ref={ref}
      >
        <h2 className="text-2xl font-bold text-center bg-gray-800 text-white py-1 font-ubuntu">
          {getYear(selected)}
        </h2>
        <div className="grid grid-cols-7 bg-gray-700 py-0.5 text-white font-ubuntu">
          {days.map((day) => (
            <div
              key={day.indonesian}
              className="text-center font-medium underline select-none"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={day.indonesian}
            >
              {day.english}
            </div>
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
              <span
                className="underline select-none"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={months[getMonth(date.fullDate)]}
              >
                {format(date.fullDate, 'MMM')}
              </span>
              <span className={date.fullDate === selected ? 'text-white' : 'text-gray-500'}>
                {date.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-2xl font-medium mt-6 bg-red-800 py-2 rounded text-white">
        <span>{question} </span>
        <span
          className="underline select-none"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={dayPrepositions[when].english}
        >
          {when}{' '}
        </span>
        <span>?</span>
      </p>
      <form
        className="flex flex-col gap-4 mt-3"
        onSubmit={handleSubmit}
      >
        <Input
          label={
            <span
              className="underline select-none"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="jabawan = answer"
            >
              Jabawan
            </span>
          }
          name="response"
          placeholder="Contoh: sekarang tanggal"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default DatePage
