/* eslint-disable react/prop-types */
const Select = ({ children, name, onChange }) => {
  return (
    <select
      name={name}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-5"
    >
      {children}
    </select>
  )
}

Select.Option = ({ children, value, ...props }) => {
  return (
    <option
      {...props}
      value={value}
    >
      {children}
    </option>
  )
}

Select.Option.displayName = 'Select.Option'

export default Select
