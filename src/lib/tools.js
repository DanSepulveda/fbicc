export const formatText = (text) => String(text).toLowerCase().trim()

export const isString = (data) => typeof data === 'string'

export const isNumber = (data) => typeof data === 'number'

export const cleanPattern = (text) => {
  if (text.startsWith('+') | text.startsWith('-') | text.startsWith('*')) {
    return text.slice(1)
  }

  return text
}
