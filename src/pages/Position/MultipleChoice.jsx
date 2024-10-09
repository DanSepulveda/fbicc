import { Tooltip } from 'react-tooltip'
import { useListeners } from '../../hooks/useListener'
import { usePosition } from '../../hooks/usePosition'
import DisplayBox from './DisplayBox'
import Box from '../../components/Box'
import Choice from '../../components/Choice'
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
      <Choice>
        {answers.map((answer, index) => (
          <Choice.Item
            key={index}
            answer={answer}
            index={index}
            handleSubmit={handleSubmit}
          />
        ))}
      </Choice>
    </div>
  )
}

export default MultipleChoice
