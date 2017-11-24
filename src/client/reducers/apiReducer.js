import { FETCH_JOKES } from '../actions/actionTypes'

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
    default:
      return state
  }
}
