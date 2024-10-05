import { useFetch } from '../hooks/useFetch'

const TalkOrder = () => {
  const [data, setData] = useFetch([], '/conversations.json')
  return <div>TalkOrder</div>
}

export default TalkOrder
