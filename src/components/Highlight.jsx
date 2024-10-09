/* eslint-disable react/prop-types */
const Highlight = ({ color = 'yellow', children }) => {
  const colors = {
    yellow: 'bg-yellow-400',
    green: 'bg-green-400'
  }

  return <span className={colors[color]}>{children}</span>
}

export default Highlight
