import { TodoItem } from './TodoItem'

export const TodoList = ({ arreglo = [], onRemoveTodo }) => {
  return (
    <ul className='list-group'>
      {
        arreglo.map((objeto) => (

          <TodoItem key={objeto.id} todo={objeto} onRemoveTodo={onRemoveTodo} />

        ))
      }
    </ul>
  )
}
