/* eslint-disable react/prop-types */
import Button from './Button'

const ResponseButton = ({ answer, index, handleSubmit }) => {
  return (
    <Button
      onClick={handleSubmit}
      id={`answer-${index + 1}`}
      data-answer={answer}
      variant="response"
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

export default ResponseButton
