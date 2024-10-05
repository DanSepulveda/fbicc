import { FaArrowRightLong } from 'react-icons/fa6'
import { useFetch } from '../hooks/useFetch'
import { useWord } from '../hooks/useWord'
import Button from '../components/Button'
import Input from '../components/Input'

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
      <div className="border rounded-md overflow-hidden text-center shadow-lg mb-6">
        <div className="bg-red-800 text-white text-2xl font-bold py-1 font-ubuntu tracking-widest">
          WORD
        </div>
        <p className="text-4xl text-gray-800 font-medium py-3">{selected.word}</p>
      </div>

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
