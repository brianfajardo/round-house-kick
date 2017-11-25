import {
  SET_SEARCH_FILTER,
  SET_SORT_BY_FILTER,
  SET_SEARCH_QUERY,
} from '../actions/actionTypes'

const initialState = {
  searchQuery: '',
  searchFilter: 'id',
  sortBy: {
    property: '',
    ascending: false
  }
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
        sortBy: {
          ...state.sortBy,
          property: action.payload,
          ascending: !state.sortBy.ascending
        },
      }
    default:
      return state
  }
}
