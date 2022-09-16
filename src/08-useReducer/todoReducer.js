/* eslint-disable padded-blocks */

export const todoReducer = (initialState = [], action) => {

  // Siempre debe retornar un state
  switch (action.type) {

    case '[TODO] Add Todo':
      return [...initialState, action.payload]

    case '[TODO] Remove Todo':
      return initialState.filter((todo) => (todo.id !== action.payload))

    default:
      return initialState
  }
}
