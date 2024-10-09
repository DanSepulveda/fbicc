/* eslint-disable react/prop-types */

const Box = ({ children }) => {
  return (
    <section className="border rounded-md overflow-hidden text-center shadow-lg mb-6">
      {children}
    </section>
  )
}

Box.Title = ({ children }) => {
  return (
    <p className="bg-red-800 text-white text-2xl font-bold py-1 font-ubuntu tracking-widest">
      {children}
    </p>
  )
}

Box.Content = ({ children }) => {
  return <div>{children}</div>
}

Box.Text = ({ children }) => {
  return <p className="text-4xl text-gray-800 font-medium py-3">{children}</p>
}

Box.Content.displayName = 'Box.Content'
Box.Text.displayName = 'Box.Text'
Box.Title.displayName = 'Box.Title'

export default Box
