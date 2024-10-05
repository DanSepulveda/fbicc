import { useTime } from '../../hooks/useTime'
import { getRandomNumber } from '../../lib/getRandom'
import Box from '../../components/Box'
import Button from '../../components/Button'

const TextToTime = () => {
  const { selected, checkAnswer, answers } = useTime()

  const handleSubmit = (event) => {
    const userAnswer = event.currentTarget.dataset.answer
    checkAnswer(userAnswer)
  }

  return (
    <div>
      <Box
        title="TIME"
        text={selected.text[getRandomNumber(0, selected.text.length - 1)]}
      />
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

export default TextToTime
