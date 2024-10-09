import Button from './Button'

/* eslint-disable react/prop-types */
const Choice = ({ children }) => {
  return (
    <section>
      <p className="text-center text-sm text-blue-600 mt-3">
        On a computer, you can use the numeric keypad
      </p>
      <div className="grid grid-cols-2 max-w-md mx-auto gap-2 ">{children}</div>
    </section>
  )
}

Choice.Item = ({ handleSubmit, answer, index, ...props }) => {
  return (
    <Button
      onClick={handleSubmit}
      id={`answer-${index + 1}`}
      data-answer={answer}
      variant="response"
      {...props}
    >
      <div className="w-full text-left flex items-center gap-2 bg-gray-300">
        <div className="bg-gray-700 text-white w-16 h-16 text-center shrink-0 flex justify-center items-center text-ubuntu font-bold text-2xl">
          {index + 1}
        </div>
        <div className="grow">{answer}</div>
      </div>
    </Button>
  )
}

Choice.Item.displayName = 'Choice.Item'

export default Choice
