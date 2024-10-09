import { Outlet, useMatches } from 'react-router-dom'
import { MdOutlineFeedback } from 'react-icons/md'

const LayoutOption = () => {
  const matches = useMatches()
  const { options } = matches[1].handle

  return (
    <div>
      {options}
      <section className="pt-4">
        {matches.length === 2 ? (
          <section className="flex flex-col items-center text-gray-400/80">
            <MdOutlineFeedback className="text-9xl " />
            <h3 className="text-3xl font-bold">Choose an option</h3>
          </section>
        ) : (
          <Outlet />
        )}
      </section>
    </div>
  )
}

export default LayoutOption
