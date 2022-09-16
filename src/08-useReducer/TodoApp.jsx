/* eslint-disable padded-blocks */
import { useReducer } from 'react'
import { TodoList } from './components/TodoList'
import { todoReducer } from './todoReducer'
import { TodoAdd } from './components/TodoAdd'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },

  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del tiempo',
    done: false
  }
]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action)
  }

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <TodoList arreglo={todos} />
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
