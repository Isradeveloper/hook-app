
export const TodoItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={todo.id}>
      {todo.description}
      <button className='btn btn-danger m-2' onClick={(e) => onRemoveTodo(todo.id)}>Borrar</button>
    </li>
  )
}
