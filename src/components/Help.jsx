/* eslint-disable react/prop-types */
import { MdChevronRight, MdCheck, MdOutlineClose } from 'react-icons/md'

const Help = ({ children }) => {
  return <div className="w-full">{children}</div>
}

Help.Title = ({ children, className = '' }) => {
  return <h2 className={`text-center text-2xl font-medium border-b-2 ${className}`}>{children}</h2>
}

Help.Subtitle = ({ children }) => {
  return <h3 className="text-lg mt-3 font-medium text-red-800">{children}</h3>
}

Help.Text = ({ children }) => {
  return <p>{children}</p>
}

Help.List = ({ children }) => {
  return <ul>{children}</ul>
}

Help.ListItem = ({ children, wrong = false, correct = false }) => {
  return (
    <li className={`pl-2 ${wrong ? 'text-red-500' : ''} ${correct ? 'text-green-500' : ''}`}>
      {wrong ? <MdOutlineClose className="inline" /> : null}
      {correct ? <MdCheck className="inline" /> : null}
      {!wrong & !correct ? <MdChevronRight className="inline" /> : null}

      {children}
    </li>
  )
}

Help.Wrong = ({ children }) => {
  return (
    <p className="font-medium text-lg">
      Your answer: <span className="text-red-700 font-normal">{children}</span>{' '}
    </p>
  )
}

Help.Correct = ({ children }) => {
  return (
    <p className="font-medium text-lg">
      Right answer: <span className="text-green-700 font-normal">{children}</span>
    </p>
  )
}

Help.Correct.displayName = 'Help.Correct'
Help.List.displayName = 'Help.List'
Help.ListItem.displayName = 'Help.ListItem'
Help.Subtitle.displayName = 'Help.Subtitle'
Help.Text.displayName = 'Help.Text'
Help.Title.displayName = 'Help.Title'
Help.Wrong.displayName = 'Help.Wrong'

export default Help
