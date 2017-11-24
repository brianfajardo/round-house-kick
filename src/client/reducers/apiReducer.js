import { FETCH_JOKES, CREATE_ENTRY } from '../actions/actionTypes'

const initialState = {
  jokes: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES:
      return {
        ...state,
        jokes: action.payload,
      }
    case CREATE_ENTRY:
      return {
        ...state,
        jokes: [action.payload, ...state.jokes],
      }
    default:
      return state
  }
}
