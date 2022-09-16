
export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={todo.id}>
      <span className={`${todo.done && 'text-decoration-line-through'}`}>{todo.description}</span>
      <div className=' sm-flex-column'>
        <button className='btn btn-info m-1' onClick={(e) => onToggleTodo(todo.id)}>Hecho</button>
        <button className='btn btn-danger m-1' onClick={(e) => onRemoveTodo(todo.id)}>Borrar</button>
      </div>
    </li>
  )
}
