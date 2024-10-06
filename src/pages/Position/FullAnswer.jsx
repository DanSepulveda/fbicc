import { Tooltip } from 'react-tooltip'
import { usePosition } from '../../hooks/usePosition'
import { useListeners } from '../../hooks/useListener'
import DisplayBox from './DisplayBox'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'

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

      <Box title={`Dimana letak ${selected.main.name} itu?`}>
        <DisplayBox {...selected} />
      </Box>

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
          name="position"
          placeholder="Contoh: kursi itu di kanan beruang"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default FullAnswer
