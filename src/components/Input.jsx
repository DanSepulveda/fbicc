// eslint-disable-next-line react/prop-types
const Input = ({ label, name, type = 'text', message = '', ...props }) => {
  return (
    <div>
      <label
        className="block text-gray-800 font-bold mb-0.5 text-center text-lg font-ubuntu"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-lg text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        id={name}
        {...props}
      />
      <div className="mt-0.5 pl-1.5 font-medium text-gray-800">{message}</div>
    </div>
  )
}

export default Input
