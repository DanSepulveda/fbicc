import { FaCircleQuestion } from 'react-icons/fa6'
import Button from '../components/Button'
import { useVocabulary } from '../hooks/useVocabulary'
import toast from 'react-hot-toast'

const Vocabulary = () => {
  const { selectedWords, pairs, checkAnswer, finishRound, selectedChecks, handleCheck } =
    useVocabulary()

  const handleClick = (element) => {
    if (element.state === 'normal') {
      checkAnswer(element)
    }
  }

  const getStyles = (state) => {
    const base = 'py-1 px-2 rounded select-none border '

    const states = {
      normal: 'border-green-600 md:hover:bg-green-200 cursor-pointer transition',
      selected: 'bg-green-600 text-white cursor-pointer',
      disabled: 'bg-gray-200 text-gray-400',
      completed: 'line-through'
    }

    return base + states[state]
  }

  const handleSelection = (event) => {
    handleCheck(event.target.value)
  }

  const classes = [
    {
      id: 'class2',
      name: 2
    },
    {
      id: 'class3',
      name: 3
    },
    {
      id: 'class4',
      name: 4
    },
    {
      id: 'class5',
      name: 5
    },
    {
      id: 'class6',
      name: 6
    },
    {
      id: 'class8',
      name: 8
    }
  ]

  const openHelp = () => {
    toast(
      (t) => (
        <div className="w-100">
          <h2 className="text-center text-2xl font-medium border-b-2">Instructions</h2>
          <h3 className="text-lg mt-3 font-medium text-red-800">Step 1</h3>
          <div>
            <p className="font-medium">
              Use the numbers to include/exclude the vocabulary corresponding to each class.
            </p>
          </div>
          <h3 className="text-lg mt-3 font-medium text-red-800">Step 2</h3>
          <div>
            <p className="font-medium">
              Pair the Indonesian words with their corresponding English translations. When you
              select a word in English, only the Indonesian words will remain active, and vice
              versa.
            </p>
          </div>
          <h3 className="text-lg mt-3 font-medium text-red-800">Step 3</h3>
          <div>
            <p className="font-medium">
              When you complete the 10 pairs, you can continue with the next 10.
            </p>
          </div>
          <div className="mt-4 mx-auto flex justify-center">
            <Button onClick={() => toast.dismiss(t.id)}>Close</Button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        duration: Infinity,
        id: 'toastid'
      }
    )
  }

  return (
    <div>
      <div>
        <FaCircleQuestion
          className="text-blue-900 ml-auto text-xl cursor-pointer hover:text-blue-800"
          onClick={openHelp}
        />
      </div>
      <h2 className="text-center font-medium font-ubuntu">Include vocabulary by class</h2>
      <div className="grid grid-cols-6 border-2 border-gray-400 border-b-0">
        {classes.map((el, index) => (
          <label
            key={el.id}
            className={`${
              selectedChecks.includes(el.id) ? 'bg-gray-700' : 'bg-gray-700/15'
            } text-center py-1.5 cursor-pointer`}
          >
            <input
              type="checkbox"
              className="hidden"
              value={el.id}
              onChange={handleSelection}
            />
            <div
              className={`${
                selectedChecks.includes(el.id) ? 'text-gray-50' : 'text-gray-600'
              } font-medium text-lg ${
                classes.length - 1 !== index ? 'border-r' : ''
              } border-gray-400`}
            >
              {el.name}
            </div>
          </label>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 border-2 border-gray-400 p-2">
        {selectedWords.map((el) => (
          <div
            key={`${el.lang}-${el.word}`}
            className={getStyles(el.state)}
            onClick={() => handleClick(el)}
          >
            {el.word}
          </div>
        ))}
      </div>
      {pairs.length === 10 ? (
        <div className="flex justify-center mt-4">
          <Button
            type="button"
            onClick={finishRound}
          >
            Next
          </Button>
        </div>
      ) : null}
      {pairs.length ? (
        <table className="mt-5 mx-auto w-full max-w-screen-sm">
          <thead>
            <tr className="w-full bg-gray-700 text-gray-50 border-b border-gray-300">
              <th className="py-2 px-4 w-1/2 text-left font-bold uppercase text-sm">English</th>
              <th className="py-2 px-4 w-1/2 text-left font-bold uppercase text-sm">Indonesian</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((el) => (
              <tr
                key={`row-${el.indonesian}`}
                className="border-b border-gray-200 hover:bg-gray-200"
              >
                <td className="py-3 px-6 text-gray-700">{el.english}</td>
                <td className="py-3 px-6 text-gray-700">{el.indonesian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}

export default Vocabulary
