// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, type = 'button', variant = 'success', ...props }) => {
  const variants = {
    success:
      'bg-gray-600 hover:bg-gray-700 active:bg-gray-700/90 text-white py-1 px-4 rounded shadow-lg',
    error: 'bg-white border border-red-500 text-red-500 py-1 px-4 rounded shadow-lg',
    response: 'min-h-16 border'
  }
  return (
    <button
      className={`${variants[variant]} text-lg font-bold  transition duration-200 ease-in-out`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
