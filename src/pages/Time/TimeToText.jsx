import { Tooltip } from 'react-tooltip'
import { useTime } from '../../hooks/useTime'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'

const TimeToText = () => {
  const { selected, checkAnswer } = useTime()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.time.value
    if (userAnswer) {
      checkAnswer(userAnswer)
      event.target.reset()
      event.target.focus()
    }
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Box
        title={
          <span
            className="underline select-none"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="waktu = time"
          >
            WAKTU
          </span>
        }
        text={selected.digit}
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
          name="time"
          placeholder="Contoh: jam dua lebih tiga puluh satu"
          message={
            <span>
              When possible use <span className="font-bold text-green-700">lebih</span> or{' '}
              <span className="font-bold text-green-700">kurang</span> otherwise your response will
              be considerated wrong
            </span>
          }
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default TimeToText
