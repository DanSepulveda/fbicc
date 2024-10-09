/* eslint-disable react/prop-types */
const Card = ({ children }) => {
  return (
    <article className="bg-white hover:bg-red-100 transition rounded-md pt-2.5 shadow-lg">
      {children}
    </article>
  )
}

Card.Image = ({ src, alt = '' }) => {
  return (
    <img
      src={'/images/' + src}
      alt={alt}
      className="h-12 mx-auto"
    />
  )
}

Card.Title = ({ children }) => {
  return (
    <h2 className="text-white text-lg bg-gray-500 font-semibold font-ubuntu text-center mt-3  py-0.5 rounded-b-md">
      {children}
    </h2>
  )
}

Card.Image.displayName = 'Card.Image'
Card.Title.displayName = 'Card.Title'

export default Card
