import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

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

export const useToDo = () => {
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

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Done Todo',
      payload: id
    })
  }

  return {
    todos,
    handleNewTodo,
    handleDeleleTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}
