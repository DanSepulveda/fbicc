import { Tooltip } from 'react-tooltip'
import { useTime } from '../../hooks/useTime'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'
import TooltipText from '../../components/TooltipText'

const TimeToText = () => {
  const { selected, checkAnswer } = useTime()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.time.value
    if (userAnswer) {
      checkAnswer(userAnswer)
      event.target.reset()
      event.target.focus()
    }
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Box>
        <Box.Title>
          <TooltipText content="time">WAKTU</TooltipText>
        </Box.Title>
        <Box.Text>{selected.digit}</Box.Text>
      </Box>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="time"
          placeholder="Contoh: jam dua lebih tiga puluh satu"
          label={<TooltipText content="answer">Jabawan</TooltipText>}
          message={
            <span>
              When possible use <span className="font-bold text-green-700">lebih</span> or{' '}
              <span className="font-bold text-green-700">kurang</span> otherwise your response will
              be considerated wrong
            </span>
          }
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default TimeToText
