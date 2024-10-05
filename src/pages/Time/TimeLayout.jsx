/* eslint-disable react/prop-types */
import { NavLink, Outlet } from 'react-router-dom'
import { FaArrowRightLong, FaArrowDown, FaRegClock, FaQuestion } from 'react-icons/fa6'
import { MdAbc } from 'react-icons/md'

const Selector = ({ to, before, after, arrow = true }) => {
  return (
    <NavLink
      to={to}
      className={(s) =>
        `${
          s.isActive ? 'bg-gray-700 text-white' : 'bg-gray-200'
        } flex items-center justify-center gap-1 border border-gray-800`
      }
    >
      {before}
      {arrow ? <FaArrowRightLong /> : null}
      {after}
    </NavLink>
  )
}

const TimeLayout = () => {
  return (
    <div>
      <div className=" -mt-4 -mx-1.5">
        <div className="bg-yellow-500 text-center flex items-center justify-center gap-1 text-ubuntu text-lg">
          <FaArrowDown />
          Choose one
          <FaArrowDown />
        </div>
        <div className="grid grid-cols-3">
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
          <Selector
            to="/time/time-actions"
            before={<FaRegClock className="text-xl" />}
            after={<FaQuestion className="text-xl" />}
            arrow={false}
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
