import { FaRegClock } from 'react-icons/fa6'
import { MdAbc } from 'react-icons/md'
import Selector from '@components/Selector'

const TimeOptions = () => {
  return (
    <div className="grid grid-cols-2">
      <Selector
        to="/time/time-to-text"
        before={<FaRegClock className="text-xl" />}
        after={<MdAbc className="text-5xl" />}
      />
      <Selector
        to="/time/text-to-time"
        before={<MdAbc className="text-5xl" />}
        after={<FaRegClock className="text-xl" />}
      />
    </div>
  )
}

export default TimeOptions
