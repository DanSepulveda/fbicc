/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { Tooltip } from 'react-tooltip'
import { MdChevronRight } from 'react-icons/md'
import { usePattern } from '@hooks/usePattern'
import Box from '@components/Box'
import Select from '@components/Select'
import TooltipText from '@components/TooltipText'
import { patterns } from '@data/patterns'
import { getMeaning } from '@lib/vocabUtilities'

const cleanPattern = (text) => {
  if (text.startsWith('+') | text.startsWith('-') | text.startsWith('*')) {
    return text.slice(1)
  }

  return text
}

const Pattern = ({ data, double }) => {
  const getStyles = (el) => {
    let styles = 'text-xl '
    if (el.startsWith('*')) {
      styles += 'font-bold px-1.5'
    } else if (el.startsWith('+')) {
      styles += 'bg-yellow-600 px-1.5 rounded text-white'
    } else {
      styles += ''
    }

    return styles
  }

  return (
    <li className={`flex gap-1 ${double ? 'mt-6' : ''}`}>
      {data.map((el, index) => {
        return (
          <Fragment key={el}>
            {(index !== 0) & (el !== '?') ? <span className="text-xl">+</span> : null}
            <div className={getStyles(el)}>{cleanPattern(el)}</div>
          </Fragment>
        )
      })}
    </li>
  )
}

const Patterns = () => {
  const { selected, changePattern } = usePattern(patterns)

  if (!selected) {
    return null
  }

  const handleChange = (event) => {
    changePattern(event.target.value)
  }

  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Select
        name="choosenPattern"
        onChange={handleChange}
      >
        {patterns.map((pattern) => (
          <Select.Option
            key={pattern.name}
            value={pattern.id}
          >
            {pattern.id.split('-')[1]}. {pattern.name}
          </Select.Option>
        ))}
      </Select>
      <Box>
        <Box.Title>{selected.name}</Box.Title>
        <Box.Content className="p-2 mx-2 border-b-2">
          <ul className="flex flex-col items-center gap-3 mb-3">
            {selected.components.map((el, index) => (
              <Pattern
                key={index}
                data={el}
                double={index === 2}
              />
            ))}
          </ul>
          <p className="text-green-800">{selected.usage}</p>
        </Box.Content>
        <Box.Content>
          <h3 className="text-2xl mb-4 mt-2 font-ubuntu font-bold text-gray-700">Examples</h3>
          <ul className="px-4 grid grid-cols-1 md:grid-cols-2 text-left gap-6 pb-4">
            {selected.examples.map((el) => (
              <li
                key={el.english}
                className="flex items-center mb-auto"
              >
                <MdChevronRight className="inline text-xl" />
                <div>
                  <p className="text-lg font-medium text-blue-900 leading-6">
                    {el.indonesian.split('_').map((word, index) => {
                      const meaning = getMeaning(word)
                      return (
                        <span key={`word-${index}`}>
                          {meaning ? (
                            <TooltipText content={meaning}>{word}</TooltipText>
                          ) : (
                            <span>{word}</span>
                          )}
                          <span className="no-underline"> </span>
                        </span>
                      )
                    })}
                  </p>
                  <p className="-mt-0.5 text-red-700">{el.english}</p>
                </div>
              </li>
            ))}
          </ul>
        </Box.Content>
      </Box>
    </div>
  )
}

export default Patterns
