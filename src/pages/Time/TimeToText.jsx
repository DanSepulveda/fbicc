import { Tooltip } from 'react-tooltip'
import { useTime } from '../../hooks/useTime'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { FaCircleQuestion } from 'react-icons/fa6'
import toast from 'react-hot-toast'

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

  const openHelp = () => {
    toast(
      (t) => (
        <div className="w-100">
          <h2 className="text-center text-2xl font-medium border-b-2">Time format</h2>
          <h3 className="text-lg mt-3 font-medium text-red-800">lebih</h3>
          <div>
            <p className="font-medium">It will always be considered correct</p>
          </div>
          <h3 className="text-lg mt-3 font-medium text-red-800">kurang</h3>
          <div>
            <p className="font-medium">It will be considered correct when minutes is above 30</p>
            <p className="text-green-600">(10:55) jam sebelas kurang lima</p>
            <p className="text-green-600">(7:38) jam delapan kurang dua puluh dua</p>
            <p className="text-red-600">(4:30) jam lima kurang tiga puluh</p>
            <p className="text-red-600">(6:18) jam tujuh kurang empat puluh dua</p>
          </div>
          <div className="mt-4 mx-auto flex justify-center">
            <Button onClick={() => toast.dismiss(t.id)}>Close</Button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        duration: Infinity,
        id: 'toastid'
      }
    )
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <div className="mb-3">
        <FaCircleQuestion
          className="text-blue-900 ml-auto text-xl cursor-pointer hover:text-blue-800"
          onClick={openHelp}
        />
      </div>
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
