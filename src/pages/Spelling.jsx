import { Tooltip } from 'react-tooltip'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useWord } from '../hooks/useWord'
import Box from '../components/Box'
import Button from '../components/Button'
import Input from '../components/Input'
import TooltipText from '../components/TooltipText'

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
        title={<TooltipText content="kata = word">KATA</TooltipText>}
        text={selected.word}
      />
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label={<TooltipText content="jabawan = answer">Jabawan</TooltipText>}
          name="spelling"
          placeholder="Use a space as separator"
          message={
            <span className="flex items-center gap-2 text-cyan-700">
              <TooltipText content="contoh = example">Contoh</TooltipText>
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
