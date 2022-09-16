/* eslint-disable padded-blocks */
import { useReducer, useEffect } from 'react'
import { TodoList } from './components/TodoList'
import { todoReducer } from './todoReducer'
import { TodoAdd } from './components/TodoAdd'

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }

]

const init = () => {
  // eslint-disable-next-line no-undef
  return JSON.parse(localStorage.getItem('todos')) || [] // Tomamos los valores que se encuentran en el localStorage, si no hay valores retorna un arreglo vacio
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('todos', JSON.stringify(todos) || '') // Cuando el arreglo de todos, cambia. Almacena el arreglo en el localStorage
  }, [todos])

  const handleNewTodo = (todo) => { // Añade un nuevo Todo
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action)
  }

  const handleDeleleTodo = (id) => {

    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  return (
    <>
      <h1>TodoApp: {todos.length}, <small>pendientes: 2</small></h1>
      <hr />

      <div className='row'>

        <div className='col-7'>
          <TodoList arreglo={todos} onRemoveTodo={(id) => handleDeleleTodo(id)} />
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
