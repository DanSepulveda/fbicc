import { FaRegImage } from 'react-icons/fa6'
import { MdAbc, MdOutlineTouchApp } from 'react-icons/md'
import Selector from '@components/Selector'

const PositionOptions = () => {
  return (
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
  )
}

export default PositionOptions
