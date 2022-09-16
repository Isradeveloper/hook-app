
export const TodoItem = ({ id, description, done }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={id}>
      {description}
      <button className='btn btn-danger'>Borrar</button>
    </li>
  )
}
