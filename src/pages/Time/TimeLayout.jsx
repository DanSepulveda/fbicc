import { Outlet } from 'react-router-dom'
import { FaArrowDown, FaRegClock } from 'react-icons/fa6'
import { MdAbc } from 'react-icons/md'
import Selector from '../../components/Selector'

const TimeLayout = () => {
  return (
    <div>
      <div>
        <div className="text-center flex items-center justify-center gap-1 text-ubuntu text-lg">
          <FaArrowDown />
          CHOOSE ONE
          <FaArrowDown />
        </div>
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
      </div>
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default TimeLayout
