import { Tooltip } from 'react-tooltip'
import { useListeners } from '../../hooks/useListener'
import { useTime } from '../../hooks/useTime'
import Box from '../../components/Box'
import Choice from '../../components/Choice'
import TooltipText from '../../components/TooltipText'

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
      <Box>
        <Box.Title>
          <TooltipText content="time">WAKTU</TooltipText>
        </Box.Title>
        <Box.Text>{selected.displayText}</Box.Text>
      </Box>
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

export default TextToTime
