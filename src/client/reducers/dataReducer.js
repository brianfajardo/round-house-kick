import { FETCH_JOKES, CREATE_ENTRY, DELETE_ENTRY } from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_JOKES:
      return action.payload
    case CREATE_ENTRY:
      return [action.payload, ...state]
    case DELETE_ENTRY:
      return [...state.filter(({ id }) => id !== action.payload)]
    default:
      return state
  }
}
