/* eslint-disable padded-blocks */
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useToDo } from '../hooks/useToDo'

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleToggleTodo, handleDeleleTodo } = useToDo()

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <TodoList arreglo={todos} onRemoveTodo={(id) => handleDeleleTodo(id)} onToggleTodo={(id) => (handleToggleTodo(id))} />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={(newTodo) => handleNewTodo(newTodo)} />
        </div>
      </div>
    </>
  )
}
