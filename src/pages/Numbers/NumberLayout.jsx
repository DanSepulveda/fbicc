import { Outlet } from 'react-router-dom'
import { FaArrowDown } from 'react-icons/fa6'
import { Md123, MdAbc } from 'react-icons/md'
import { PiSpeakerSimpleHighFill } from 'react-icons/pi'
import Selector from '../../components/Selector'

const NumberLayout = () => {
  return (
    <div>
      <div>
        <div className=" text-center flex items-center justify-center gap-1 text-ubuntu text-lg">
          <FaArrowDown />
          Choose one
          <FaArrowDown />
        </div>
        <div className="grid grid-cols-3">
          <Selector
            to="/numbers/number-to-text"
            before={<Md123 className="text-5xl" />}
            after={<MdAbc className="text-5xl" />}
          />
          <Selector
            to="/numbers/text-to-number"
            before={<MdAbc className="text-5xl" />}
            after={<Md123 className="text-5xl" />}
          />
          <Selector
            to="/numbers/audio-to-number"
            before={<PiSpeakerSimpleHighFill className="text-2xl" />}
            after={<Md123 className="text-5xl" />}
          />
        </div>
      </div>
      <div className="pt-4">
        <Outlet />
      </div>
    </div>
  )
}

export default NumberLayout
