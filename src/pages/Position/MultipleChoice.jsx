import { Tooltip } from 'react-tooltip'
import { useListeners } from '../../hooks/useListener'
import { usePosition } from '../../hooks/usePosition'
import DisplayBox from './DisplayBox'
import Box from '../../components/Box'
import ResponseButton from '../../components/ResponseButton'
import TooltipText from '../../components/TooltipText'

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
      <Box>
        <Box.Title>{`Dimana letak ${selected.main.name} itu?`}</Box.Title>
        <Box.Content>
          <DisplayBox {...selected} />
        </Box.Content>
      </Box>

      <p className="text-center text-2xl font-medium">
        <TooltipText content={selected.main.english}>{selected.main.name}</TooltipText> itu di{' '}
        <span className="bg-green-200">.......</span>{' '}
        <TooltipText content={selected.secondary.english}>{selected.secondary.name}</TooltipText>
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
