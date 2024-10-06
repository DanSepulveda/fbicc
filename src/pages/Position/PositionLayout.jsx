import { Outlet } from 'react-router-dom'
import { FaArrowDown, FaRegImage } from 'react-icons/fa6'
import { MdAbc, MdOutlineTouchApp } from 'react-icons/md'
import Selector from '../../components/Selector'

const PositionLayout = () => {
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
            to="/position/full-answer"
            before={<FaRegImage className="text-xl" />}
            after={<MdAbc className="text-5xl" />}
          />
          <Selector
            to="/position/multiple-choice"
            before={<FaRegImage className="text-xl" />}
            after={<MdOutlineTouchApp className="text-2xl" />}
          />
        </div>
      </div>
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  )
}

export default PositionLayout
