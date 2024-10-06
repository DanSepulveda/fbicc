import { Tooltip } from 'react-tooltip'
import { usePosition } from '../../hooks/usePosition'
import { useListeners } from '../../hooks/useListener'
import DisplayBox from './DisplayBox'
import Box from '../../components/Box'
import ResponseButton from '../../components/ResponseButton'

const MultipleChoice = () => {
  useListeners()
  const { selected, answers, checkAnswer } = usePosition()

  const handleSubmit = (event) => {
    const userResponse = event.currentTarget.dataset.answer
    checkAnswer(userResponse)
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />

      <Box title={`Dimana letak ${selected.main.name} itu?`}>
        <DisplayBox {...selected} />
      </Box>

      <p className="text-center text-2xl font-medium">
        {selected.main.name} itu di <span className="bg-green-200">_____</span>{' '}
        {selected.secondary.name}
      </p>
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

export default MultipleChoice
