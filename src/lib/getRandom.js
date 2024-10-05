export const randomFromArray = (list) => {
  const random = Math.floor(Math.random() * list.length)
  return list[random]
}

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const shuffleArray = (array) => {
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export const getRandomTime = () => {
  const hour = getRandomNumber(1, 12)
  const minute = getRandomNumber(0, 59)

  const formattedMinute = minute < 10 ? '0' + minute : minute

  return `${hour}:${formattedMinute}`
}
