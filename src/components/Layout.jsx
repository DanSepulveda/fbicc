import { Toaster } from 'react-hot-toast'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  const currentYear = new Date().getFullYear()

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

      <main className="flex-grow p-3 bg-gray-100">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white p-2">
        <p className="text-center text-xs font-ubuntu">Made with ❤️ by Dansep</p>
      </footer>
    </div>
  )
}

export default Layout
