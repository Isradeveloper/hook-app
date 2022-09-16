/* eslint-disable padded-blocks */

const initialState = [ // Tenemos un estado inicial (Arreglo de objetos)
  {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
  }
]

const todoReducer = (state = initialState, action = {}) => { // Recibimos el stateInicial en el reducer

  if (action.type === '[TODO] add todo') {
    return [...state, action.payload]
  }
  return state // Si no recibe una acción retorna el state
}

let todos = todoReducer() // Inicializamos el reducer

const newTodo = { // Creamos un nuevo elemento
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false
}

const addTodoAction = { // Creamos la acción añadir, en payload: se recibe el objeto a añadir
  type: '[TODO] add todo',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log({ state: todos })
