/* eslint-disable padded-blocks */

export const todoReducer = (initialState = [], action) => {

  // Siempre debe retornar un state
  switch (action.type) {

    case '[TODO] Add Todo':
      return [...initialState, action.payload]

    default:
      return initialState
  }
}
