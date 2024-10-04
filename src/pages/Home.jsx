import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Title from '../components/Title'

// TODO: check article styles

const Home = () => {
  const [data] = useFetch([], '/data/activities.json')

  return (
    <div>
      <Title>Activities</Title>
      <div className="grid grid-cols-3 gap-3">
        {data.map((block) => (
          <Link
            key={block.name}
            to={block.link}
          >
            <article className="bg-white rounded-md pt-2.5 shadow-lg">
              <img
                src={'/images/' + block.image}
                className="h-12 mx-auto"
              />
              <h2 className="text-white text-lg bg-red-900 font-semibold font-ubuntu text-center mt-3  py-0.5 rounded-b-md">
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
