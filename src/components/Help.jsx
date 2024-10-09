/* eslint-disable react/prop-types */
import { MdChevronRight, MdCheck, MdOutlineClose } from 'react-icons/md'

const Help = ({ children }) => {
  return <div className="w-100">{children}</div>
}

Help.Title = ({ children }) => {
  return <h2 className="text-center text-2xl font-medium border-b-2">{children}</h2>
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

Help.List.displayName = 'Help.List'
Help.ListItem.displayName = 'Help.ListItem'
Help.Subtitle.displayName = 'Help.Subtitle'
Help.Text.displayName = 'Help.Text'
Help.Title.displayName = 'Help.Title'

export default Help
