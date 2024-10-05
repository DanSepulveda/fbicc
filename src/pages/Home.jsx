import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Loader from '../components/Loader'

const Home = () => {
  const [data, loading] = useFetch('/data/activities.json')

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
        {data.map((block) => (
          <Link
            key={block.name}
            to={block.link}
          >
            <article className="bg-white hover:bg-red-100 transition rounded-md pt-2.5 shadow-lg">
              <img
                src={'/images/' + block.image}
                className="h-12 mx-auto"
                alt={block.name}
              />
              <h2 className="text-white text-lg bg-gray-500 font-semibold font-ubuntu text-center mt-3  py-0.5 rounded-b-md">
                {block.name}
              </h2>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
