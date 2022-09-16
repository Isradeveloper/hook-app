import { TodoItem } from './TodoItem'

export const TodoList = ({ arreglo }) => {
  return (
    <ul className='list-group'>
      {
        arreglo.map((objeto) => (

          <TodoItem key={objeto.id} id={objeto.id} description={objeto.description} done={objeto.done} />

        ))
      }
    </ul>
  )
}
