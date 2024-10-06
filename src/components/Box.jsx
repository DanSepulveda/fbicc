/* eslint-disable react/prop-types */

const Box = ({ title, text, children }) => {
  return (
    <div className="border rounded-md overflow-hidden text-center shadow-lg mb-6">
      <div className="bg-red-800 text-white text-2xl font-bold py-1 font-ubuntu tracking-widest">
        {title}
      </div>
      {children ? children : <p className="text-4xl text-gray-800 font-medium py-3">{text}</p>}
    </div>
  )
}

export default Box
