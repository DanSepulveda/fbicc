import hotToast from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'

export const toast = {
  custom: (content, position = 'top-right') =>
    hotToast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } flex flex-col items-center  max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto  ring-1 ring-black ring-opacity-5 px-3 pt-2 pb-5`}
        >
          <div className="flex justify-end w-full">
            <button
              className="text-right text-2xl p-1 rounded-full hover:bg-red-100 transition"
              onClick={() => hotToast.dismiss(t.id)}
            >
              <MdOutlineClose />
            </button>
          </div>
          {content}
        </div>
      ),
      {
        position: position,
        duration: Infinity,
        id: 'toastid'
      }
    ),
  success: (content) => {
    hotToast.success(content, { id: 'toastid' })
  }
}
