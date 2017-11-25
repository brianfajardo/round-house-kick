import {
  SET_SEARCH_FILTER,
  SET_SORT_BY_FILTER,
  SET_SEARCH_QUERY,
} from '../actions/actionTypes'

const initialState = {
  searchQuery: '',
  searchFilter: '',
  sortBy: 'id',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      }
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      }
    case SET_SORT_BY_FILTER:
      return {
        ...state,
        sortBy: action.payload,
      }
    default:
      return state
  }
}
