/* eslint-disable react/prop-types */
import { FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

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

export default Selector
