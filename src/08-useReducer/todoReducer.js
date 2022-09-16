/* eslint-disable padded-blocks */

export const todoReducer = (initialState = [], action) => {

  // Siempre debe retornar un state
  switch (action.type) {

    case '[TODO] Add Todo':
      return [...initialState, action.payload]

    case '[TODO] Remove Todo':
      return initialState.filter((todo) => (todo.id !== action.payload))

    case '[TODO] Done Todo':
      return initialState.map(todo => {

        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo

      })

    default:
      return initialState
  }
}
