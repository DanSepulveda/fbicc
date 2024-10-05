export const randomFromArray = (list) => {
  const random = Math.floor(Math.random() * list.length)
  return list[random]
}

export const getRandomNumber = (number) => {
  return Math.floor(Math.random() * (number + 1))
}
