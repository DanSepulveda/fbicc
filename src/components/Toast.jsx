/* eslint-disable react/prop-types */
import toast from 'react-hot-toast'
import Button from './Button'

const Toast = ({ t, children }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col items-center ring-1 ring-black ring-opacity-5 px-3 py-4`}
    >
      <img
        className="h-14 w-14"
        src="/images/wrong.png"
        alt="wrong icon"
      />

      <div className="w-full my-3">{children}</div>

      <div className="flex justify-center w-full border-gray-200">
        <Button
          onClick={() => toast.dismiss(t.id)}
          variant="error"
        >
          Close
        </Button>
      </div>
    </div>
  )
}

export default Toast
