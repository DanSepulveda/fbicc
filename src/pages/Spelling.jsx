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
    <div>
      <Tooltip id="my-tooltip" />
      <Box>
        <Box.Title>
          <TooltipText content="word">KATA</TooltipText>
        </Box.Title>
        <Box.Text>{selected.word}</Box.Text>
      </Box>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="spelling"
          placeholder="Use a space as separator"
          label={<TooltipText content="answer">Jabawan</TooltipText>}
          message={
            <span className="text-cyan-700">
              <TooltipText content="example">Contoh</TooltipText>
              <span>
                : kabar <FaArrowRightLong className="inline" /> ka a be a er
              </span>
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
