import hotToast from 'react-hot-toast'
import { MdOutlineClose } from 'react-icons/md'

export const toast = (content) => {
  hotToast(
    (t) => (
      <div className="flex flex-col items-end">
        <button
          className="text-right text-2xl p-1 -mr-4 -mt-2 rounded-full hover:bg-red-100 transition"
          onClick={() => hotToast.dismiss(t.id)}
        >
          <MdOutlineClose />
        </button>
        {content}
      </div>
    ),
    {
      position: 'top-center',
      duration: Infinity,
      id: 'toastid'
    }
  )
}
