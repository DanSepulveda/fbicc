import { useVocabulary } from '@hooks/useVocabulary'
import Button from '@components/Button'
import Table from '@components/Table'

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

  return (
    <div>
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
        <Table>
          <Table.Head>
            <Table.Row head>
              <Table.Heading>English</Table.Heading>
              <Table.Heading>Indonesian</Table.Heading>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {pairs.map((el) => (
              <Table.Row key={`row-${el.indonesian}`}>
                <Table.Cell>{el.english}</Table.Cell>
                <Table.Cell>{el.indonesian}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : null}
    </div>
  )
}

export default Vocabulary
