import { useTime } from '../../hooks/useTime'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'

const TimeToText = () => {
  const { selected, checkAnswer } = useTime()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.time.value
    checkAnswer(userAnswer)
    event.target.reset()
    event.target.focus()
  }

  console.log(selected)

  return (
    <div>
      <Box
        title="TIME"
        text={selected.digit}
      />
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Your answer"
          name="time"
          placeholder="Example: jam dua lebih tiga puluh satu"
          message="When possible use lebih or kurang otherwise your response will be considerated wrong"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default TimeToText
