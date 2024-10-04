// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, type = 'button', ...props }) => {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-700/90 text-white text-lg font-bold py-2 px-4 rounded shadow-lg transition duration-200 ease-in-out"
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
