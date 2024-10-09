import { Md123, MdAbc } from 'react-icons/md'
import Selector from '@components/Selector'

const NumberOptions = () => {
  return (
    <section className="grid grid-cols-2">
      <Selector
        to="/numbers/number-to-text"
        before={<Md123 className="text-5xl" />}
        after={<MdAbc className="text-5xl" />}
      />
      <Selector
        to="/numbers/text-to-number"
        before={<MdAbc className="text-5xl" />}
        after={<Md123 className="text-5xl" />}
      />
    </section>
  )
}

export default NumberOptions
