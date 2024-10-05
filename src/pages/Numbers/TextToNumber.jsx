import { useDigit } from '../../hooks/useDigit'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'

const TextToNumber = () => {
  const { selected, checkAnswer } = useDigit()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.number.value
    checkAnswer(Number(userAnswer))
    event.target.reset()
    event.target.focus()
  }

  return (
    <div>
      <Box
        title="TEXT"
        text={selected.text}
      />
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Your answer"
          name="number"
          type="number"
          placeholder="Example: 749"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default TextToNumber
