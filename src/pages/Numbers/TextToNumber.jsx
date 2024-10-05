import { useDigit } from '../../hooks/useDigit'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { Tooltip } from 'react-tooltip'

const TextToNumber = () => {
  const { selected, checkAnswer } = useDigit()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.number.value
    checkAnswer(Number(userAnswer))
    event.target.reset()
    event.target.focus()
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Box
        title={
          <span
            data-tooltip-id="my-tooltip"
            data-tooltip-content="teks = text"
          >
            TEKS <FaRegCircleQuestion className="inline text-sm -mt-1" />
          </span>
        }
        text={selected.text}
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
          name="number"
          type="number"
          placeholder="Contoh: 749"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default TextToNumber
