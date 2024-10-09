import { Tooltip } from 'react-tooltip'
import { useTime } from '@hooks/useTime'
import Box from '@components/Box'
import Button from '@components/Button'
import Help from '@components/Help'
import Input from '@components/Input'
import TooltipText from '@components/TooltipText'

export const TimeToTextHelp = () => {
  return (
    <Help>
      <Help.Title>Time format</Help.Title>
      <Help.Subtitle>lebih</Help.Subtitle>
      <div>
        <Help.Text>It will always be considered correct</Help.Text>
      </div>
      <Help.Subtitle>kurang</Help.Subtitle>
      <Help.List></Help.List>
      <Help.Text>It will be considered correct when minutes is above 30</Help.Text>
      <Help.List>
        <Help.ListItem correct>(10:55) jam sebelas kurang lima</Help.ListItem>
        <Help.ListItem correct>(7:38) jam delapan kurang dua puluh dua</Help.ListItem>
        <Help.ListItem wrong>(4:30) jam lima kurang tiga puluh</Help.ListItem>
        <Help.ListItem wrong>(6:18) jam tujuh kurang empat puluh dua</Help.ListItem>
      </Help.List>
    </Help>
  )
}

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
      <Box>
        <Box.Title>
          <TooltipText content="time">WAKTU</TooltipText>
        </Box.Title>
        <Box.Text>{selected.digit}</Box.Text>
      </Box>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          name="time"
          placeholder="Contoh: jam dua lebih tiga puluh satu"
          label={<TooltipText content="answer">Jabawan</TooltipText>}
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
