import { FaArrowRightLong } from 'react-icons/fa6'
import { useFetch } from '../hooks/useFetch'
import { useWord } from '../hooks/useWord'
import Button from '../components/Button'
import Input from '../components/Input'
import Box from '../components/Box'

const Spelling = () => {
  const [data] = useFetch('/data/words.json')
  const { selected, checkAnswer } = useWord(data)

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.spelling.value
    checkAnswer(userAnswer)
    event.target.reset()
    event.target.focus()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Box
        title="WORD"
        text={selected.word}
      />
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Your answer"
          name="spelling"
          placeholder="Use a space as separator"
          message={
            <span className="flex items-center gap-2 text-cyan-700">
              Example: kabar <FaArrowRightLong />
              ka a be a er
            </span>
          }
        />
        <div className="flex justify-center">
          <Button type="submit">CHECK</Button>
        </div>
      </form>
    </div>
  )
}

export default Spelling
