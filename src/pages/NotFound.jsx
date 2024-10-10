import { Link } from 'react-router-dom'
import Layout from './Layouts/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-8xl font-bold text-red-700 mb-4 font-ubuntu">404</h1>
        <h2 className="text-3xl font-medium text-zinc-500 mb-6 font-ubuntu">
          Halaman Tidak Ditemukan
        </h2>
        <img
          src="/images/pura-lempuyang.png"
          alt="Pura lempuyang"
          className="h-42 mb-8"
        />
        <Link
          to="/"
          className="bg-red-500 text-white font-medium py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
        >
          Go home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
