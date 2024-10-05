// !ok
export const randomFromArray = (list) => {
  const random = Math.floor(Math.random() * list.length)
  return list[random]
}

export const getRandomNumber = (number) => {
  return Math.floor(Math.random() * (number + 1))
}

export function convertToIndonesian(number) {
  const ones = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']

  const tens = [
    '',
    'sepuluh',
    'dua puluh',
    'tiga puluh',
    'empat puluh',
    'lima puluh',
    'enam puluh',
    'tujuh puluh',
    'delapan puluh',
    'sembilan puluh'
  ]

  const teens = [
    'sepuluh',
    'sebelas',
    'dua belas',
    'tiga belas',
    'empat belas',
    'lima belas',
    'enam belas',
    'tujuh belas',
    'delapan belas',
    'sembilan belas'
  ]

  if (number === 0) return 'nol'
  if (number >= 10000) return 'sepuluh ribu'

  let result = ''

  if (number >= 1000) {
    const thousands = Math.floor(number / 1000)
    result += thousands === 1 ? 'seribu' : ones[thousands] + ' ribu '
    number %= 1000
  }

  if (number >= 100) {
    const hundreds = Math.floor(number / 100)
    result += hundreds === 1 ? 'seratus ' : ones[hundreds] + ' ratus '
    number %= 100
  }

  if (number >= 20) {
    const tensPlace = Math.floor(number / 10)
    result += tens[tensPlace] + ' '
    number %= 10
  } else if (number >= 10) {
    result += teens[number - 10] + ' '
    number = 0
  }

  if (number > 0) {
    result += ones[number] + ' '
  }

  return result.trim()
}

export const getRandomTime = () => {
  return null
}
