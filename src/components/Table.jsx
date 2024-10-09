/* eslint-disable react/prop-types */
const Table = ({ children }) => {
  return <table className="mt-5 mx-auto w-full max-w-screen-sm">{children}</table>
}

Table.Head = ({ children }) => {
  return <thead>{children}</thead>
}

Table.Body = ({ children }) => {
  return <tbody>{children}</tbody>
}

Table.Heading = ({ children }) => {
  return <th className="py-2 px-4 w-1/2 text-left font-bold uppercase text-sm">{children}</th>
}

Table.Row = ({ children, head = false, ...props }) => {
  return (
    <tr
      className={
        head
          ? 'w-full bg-gray-700 text-gray-50 border-b border-gray-300'
          : 'border-b border-gray-200 hover:bg-gray-200'
      }
      {...props}
    >
      {children}
    </tr>
  )
}

Table.Cell = ({ children }) => {
  return <td className="py-3 px-6 text-gray-700">{children}</td>
}

Table.Body.displayName = 'Table.Body'
Table.Cell.displayName = 'Table.Cell'
Table.Head.displayName = 'Table.Head'
Table.Heading.displayName = 'Table.Heading'
Table.Row.displayName = 'Table.Row'

export default Table
