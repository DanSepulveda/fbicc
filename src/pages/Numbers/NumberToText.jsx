import { useDigit } from '../../hooks/useDigit'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { Tooltip } from 'react-tooltip'

const NumberToText = () => {
  const { selected, checkAnswer, limit, setLimit } = useDigit()

  const handleSubmit = (event) => {
    event.preventDefault()
    const userAnswer = event.target.elements.number.value
    checkAnswer(userAnswer)
    event.target.reset()
    event.target.focus()
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <div className="flex gap-2.5 border-2 border-gray-700 rounded py-2 px-1.5 mb-4">
        <div className="flex flex-col justify-center items-center text-lg font-medium text-gray-800">
          <span>Sampai</span>
          <span>{limit}</span>
        </div>
        <input
          type="range"
          min={100}
          max={9999}
          value={limit}
          className="w-full"
          onChange={(event) => setLimit(event.target.value)}
        />
      </div>
      <Box
        title={
          <span
            data-tooltip-id="my-tooltip"
            data-tooltip-content="angka = number"
          >
            ANGKA <FaRegCircleQuestion className="inline text-sm -mt-1" />
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
              data-tooltip-id="my-tooltip"
              data-tooltip-content="jabawan = answer"
            >
              Jabawan <FaRegCircleQuestion className="inline text-sm" />
            </span>
          }
          name="number"
          placeholder="Contoh: dua puluh lima"
        />
        <div className="flex justify-center">
          <Button type="submit">Check</Button>
        </div>
      </form>
    </div>
  )
}

export default NumberToText
