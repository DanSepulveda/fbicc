import { Tooltip } from 'react-tooltip'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { useListeners } from '../../hooks/useListener'
import { useTime } from '../../hooks/useTime'
import Box from '../../components/Box'
import ResponseButton from '../../components/ResponseButton'

const TextToTime = () => {
  useListeners()
  const { selected, checkAnswer, answers } = useTime()

  const handleSubmit = (event) => {
    const userAnswer = event.currentTarget.dataset.answer
    checkAnswer(userAnswer)
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Box
        title={
          <span
            data-tooltip-id="my-tooltip"
            data-tooltip-content="waktu = time"
          >
            WAKTU <FaRegCircleQuestion className="inline text-sm -mt-1" />
          </span>
        }
        text={selected.displayText}
      />
      <p className="text-center text-sm text-blue-600 mt-3">
        On a computer, you can use the numeric keypad
      </p>
      <div className="grid grid-cols-2 max-w-md mx-auto gap-2">
        {answers.map((answer, index) => (
          <ResponseButton
            key={index}
            answer={answer}
            index={index}
            handleSubmit={handleSubmit}
          />
        ))}
      </div>
    </div>
  )
}

export default TextToTime
