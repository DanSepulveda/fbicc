import { useEffect } from 'react'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { Tooltip } from 'react-tooltip'
import { useFamily } from '../hooks/useFamily'
import Button from '../components/Button'

/* eslint-disable react/prop-types */
const useListeners = () => {
  const listenerFunction = (event) => {
    if ((event.key == 1) | (event.key == 2) | (event.key == 3) | (event.key == 4)) {
      const button = document.getElementById(`answer-${event.key}`)
      button.click()
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', listenerFunction)
  }, [])
}

const Person = ({ img, id, relation }) => {
  return (
    <div
      className={`${id === relation.me ? 'bg-green-500' : ''} ${
        id === relation.member ? 'bg-orange-400' : ''
      } border-2 border-gray-500 p-2 rounded-md`}
    >
      <img
        src={`/images/${img}.png`}
        className="h-12"
      />
    </div>
  )
}

const Family = () => {
  const { relation, answers, checkAnswer } = useFamily()
  useListeners()

  const handleSubmit = (event) => {
    const userResponse = event.currentTarget.dataset.answer
    checkAnswer(userResponse)
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <div className="flex gap-5 mb-1 justify-center">
        <div className="flex gap-1">
          <div className="h-6 w-6 bg-green-500 rounded border"></div>
          <p
            className="font-medium text-gray-700 select-none"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="saya = I"
          >
            Saya
            <FaRegCircleQuestion className="inline ml-1 text-sm" />
          </p>
        </div>
        <div className="flex gap-1">
          <div className="h-6 w-6 bg-orange-400 rounded border"></div>
          <p
            className="font-medium text-gray-700 select-none"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="anggota keluarga = family member"
          >
            Anggota keluarga
            <FaRegCircleQuestion className="inline ml-1 text-sm" />
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex justify-center gap-3">
          <Person
            img="grandpa"
            id={1}
            relation={relation}
          />
          <Person
            img="grandma"
            id={2}
            relation={relation}
          />
        </div>

        <div className="flex justify-center gap-12">
          <div className="flex gap-2">
            <Person
              img="father1"
              id={3}
              relation={relation}
            />
            <Person
              img="mother1"
              id={4}
              relation={relation}
            />
          </div>
          <div className="flex gap-2">
            <Person
              img="father2"
              id={5}
              relation={relation}
            />
            <Person
              img="mother2"
              id={6}
              relation={relation}
            />
          </div>
        </div>

        <div className="flex justify-center gap-28">
          <div className="flex flex-col items-center gap-1">
            <Person
              img="brother1"
              id={7}
              relation={relation}
            />
            <Person
              img="sister2"
              id={8}
              relation={relation}
            />
            <Person
              img="brother3"
              id={9}
              relation={relation}
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Person
              img="sister1"
              id={10}
              relation={relation}
            />
            <Person
              img="brother2"
              id={11}
              relation={relation}
            />
            <Person
              img="sister3"
              id={12}
              relation={relation}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-3 gap-2">
        <div className="h-6 w-12 bg-orange-400 rounded border"></div>
        <p className="font-medium text-2xl text-gray-700">adalah ________ku</p>
      </div>
      <div className="grid grid-cols-2 mt-3 max-w-md mx-auto gap-2">
        {answers.map((answer, index) => (
          <Button
            key={answer}
            onClick={handleSubmit}
            id={`answer-${index + 1}`}
            data-answer={answer}
            variant="response"
          >
            <div className="w-full text-left flex items-center gap-2 bg-gray-300">
              <div className="bg-gray-700 text-white w-16 h-16 text-center shrink-0 flex justify-center items-center text-ubuntu font-bold text-2xl">
                {index + 1}
              </div>
              <div className="grow">{answer}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Family
