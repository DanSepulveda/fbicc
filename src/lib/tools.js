// TODO: check
export const getDroppClass = (isOver, disabled = false) => {
  const background = disabled ? '' : isOver ? 'bg-teal-500' : 'bg-gray-200'

  return `${background} p-1.5 w-1/2 grid gap-1.5`
}

// TODO: check
export const getDraggClass = (isDragging, disabled = false) => {
  const background = disabled
    ? 'flex justify-end items-center text-right'
    : isDragging
    ? 'bg-green-200 flex items-center'
    : 'bg-gray-50 flex items-center'

  return `${background} select-none rounded p-2 min-h-20`
}
