import { Tooltip } from 'react-tooltip'
import { useListeners } from '@hooks/useListener'
import { usePosition } from '@hooks/usePosition'
import DisplayBox from './DisplayBox'
import Box from '@components/Box'
import Button from '@components/Button'
import Input from '@components/Input'
import TooltipText from '@components/TooltipText'

const FullAnswer = () => {
  useListeners()
  const { selected, checkAnswer } = usePosition()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.position.value

    if (userAnswer) {
      checkAnswer(userAnswer, true)
      event.target.reset()
      event.target.focus()
    }
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Box>
        <Box.Title>Dimana letak {selected.main.name} itu?</Box.Title>
        <Box.Content>
          <DisplayBox {...selected} />
        </Box.Content>
      </Box>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="position"
          placeholder="Contoh: kursi itu di kanan beruang"
          label={<TooltipText content="jabawan = answer">Jabawan</TooltipText>}
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default FullAnswer
