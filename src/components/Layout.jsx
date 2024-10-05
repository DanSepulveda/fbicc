import { Toaster } from 'react-hot-toast'
import { Link, Outlet, useMatches } from 'react-router-dom'

const Layout = () => {
  const currentYear = new Date().getFullYear()

  const matches = useMatches()
  const title = matches[matches.length - 1].handle.title

  return (
    <div className="flex flex-col h-dvh">
      <Toaster />
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
      <h1 className="text-center text-2xl font-ubuntu font-semibold py-1 bg-yellow-500 text-gray-900">
        {title}
      </h1>

      <main className="flex-grow p-4 px-1.5 bg-gray-100">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-2">
        <p className="text-center text-xs font-ubuntu">Made with ❤️ by Dansep</p>
      </footer>
    </div>
  )
}

export default Layout
