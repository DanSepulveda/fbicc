import { FaArrowRightLong, FaRegCircleQuestion } from 'react-icons/fa6'
import { useFetch } from '../hooks/useFetch'
import { useWord } from '../hooks/useWord'
import Button from '../components/Button'
import Input from '../components/Input'
import Box from '../components/Box'
import { Tooltip } from 'react-tooltip'

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
      <Tooltip id="my-tooltip" />
      <Box
        title={
          <span
            data-tooltip-id="my-tooltip"
            data-tooltip-content="kata = word"
          >
            KATA <FaRegCircleQuestion className="inline text-sm -mt-1" />
          </span>
        }
        text={selected.word}
      />
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label={
            <span
              data-tooltip-id="my-tooltip"
              data-tooltip-content="jabawan = answer"
            >
              Jabawan <FaRegCircleQuestion className="inline text-sm" />
            </span>
          }
          name="spelling"
          placeholder="Use a space as separator"
          message={
            <span className="flex items-center gap-2 text-cyan-700">
              <span
                data-tooltip-id="my-tooltip"
                data-tooltip-content="contoh = example"
              >
                Contoh <FaRegCircleQuestion className="inline text-sm -ml-0.5" />
              </span>
              : kabar <FaArrowRightLong />
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
