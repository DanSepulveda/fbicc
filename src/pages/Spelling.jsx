import { Tooltip } from 'react-tooltip'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useWord } from '../hooks/useWord'
import Box from '../components/Box'
import Button from '../components/Button'
import Input from '../components/Input'

const Spelling = () => {
  const { selected, checkAnswer } = useWord()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.spelling.value
    if (userAnswer) {
      checkAnswer(userAnswer)
      event.target.reset()
      event.target.focus()
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Tooltip id="my-tooltip" />
      <Box
        title={
          <span
            className="underline select-none"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="kata = word"
          >
            KATA
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
              className="underline select-none"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="jabawan = answer"
            >
              Jabawan
            </span>
          }
          name="spelling"
          placeholder="Use a space as separator"
          message={
            <span className="flex items-center gap-2 text-cyan-700">
              <span
                className="underline select-none"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="contoh = example"
              >
                Contoh
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
