import { useDigit } from '../../hooks/useDigit'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

const NumberToText = () => {
  const { selected, checkAnswer } = useDigit()

  const handleSubmit = () => {
    event.preventDefault()
    const userAnswer = event.target.elements.spelling.value
    checkAnswer(userAnswer)
    event.target.reset()
    event.target.focus()
  }

  return (
    <div>
      <Title>Spell words</Title>
      <p className="bg-red-800 text-4xl p-2 py-3 text-center text-white mb-5 rounded-md">
        {selected.word}
      </p>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Your answer"
          name="spelling"
          placeholder="Use a space to separate letters"
          message="Example: kabar -> ka a be a er"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default NumberToText
