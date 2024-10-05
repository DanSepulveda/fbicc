// !ok
export const randomFromArray = (list) => {
  const random = Math.floor(Math.random() * list.length)
  return list[random]
}

// !ok
export const getRandomNumber = (number) => {
  return Math.floor(Math.random() * (number + 1))
}

export const getRandomTime = () => {
  return null
}
