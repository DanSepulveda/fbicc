import { useEffect } from 'react'
import hotToast, { Toaster } from 'react-hot-toast'
import { FaCircleQuestion } from 'react-icons/fa6'
import { Link, Outlet, useMatches } from 'react-router-dom'
import { toast } from '@lib/toast'

const Layout = () => {
  const currentYear = new Date().getFullYear()

  const matches = useMatches()
  const { title, help } = matches[matches.length - 1].handle

  useEffect(() => {
    hotToast.dismiss()
  }, [title])

  return (
    <div className="flex flex-col h-dvh max-w-3xl mx-auto">
      <Toaster position="top-right" />
      <header className="bg-gray-800 text-white p-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/indonesia-flag.png"
            alt="Indonesia Flag"
            className="h-8 mr-2"
          />
          <h1 className="text-xl font-bold font-ubuntu">FBICC {currentYear}</h1>
        </div>
        <nav>
          <Link
            to="/"
            className="text-white hover:underline font-bold"
          >
            Home
          </Link>
        </nav>
      </header>
      <section className="flex justify-between items-center bg-yellow-500 px-2 py-1">
        <h1 className="text-2xl font-ubuntu font-semibold text-gray-900">{title}</h1>
        {help ? (
          <FaCircleQuestion
            className="text-gray-700 hover:text-gray-800 transition text-2xl cursor-pointer"
            onClick={() => toast.custom(help, 'top-center')}
          />
        ) : null}
      </section>

      <main className="flex-grow p-4 px-1.5 md:px-5 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-2">
        <p className="text-center text-xs font-ubuntu">Made with ❤️ by Dansep</p>
      </footer>
    </div>
  )
}

export default Layout
