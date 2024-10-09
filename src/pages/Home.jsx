import { Link } from 'react-router-dom'
import Card from '@components/Card'
import { activities } from '@data/activities'

const Home = () => {
  return (
    <ul className="grid grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
      {activities.map((block) => (
        <li key={block.name}>
          <Link to={block.link}>
            <Card>
              <Card.Image
                src={block.image}
                alt={block.name}
              />
              <Card.Title>{block.name}</Card.Title>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
