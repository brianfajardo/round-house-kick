import axios from 'axios'
import shortid from 'shortid'
import { toArray } from '../utils'
import {
  FETCH_JOKES,
  CREATE_ENTRY,
  DELETE_ENTRY,
  SET_SEARCH_FILTER,
  SET_SORT_BY_FILTER,
  USER_SEARCH_QUERY,
} from './actionTypes'

// Fetching multiple random jokes
const URL = 'https://api.icndb.com/jokes/random'
const quantity = 10

// Data related action creators

export const fetchJokes = () => async dispatch => {
  const request = await axios.get(`${URL}/${quantity}`)
  return dispatch({ type: FETCH_JOKES, payload: request.data.value })
}

export const createEntry = (joke, categories) => ({
  type: CREATE_ENTRY,
  payload: {
    joke,
    id: shortid.generate(),
    categories: toArray(categories),
  },
})

export const deleteEntry = id => ({
  type: DELETE_ENTRY,
  payload: id,
})

// Filter related action creators

export const setSearchFilter = filter => ({
  type: SET_SEARCH_FILTER,
  payload: filter,
})

export const setSortByFilter = filter => ({
  type: SET_SORT_BY_FILTER,
  payload: filter,
})

export const userSearchQuery = query => ({
  type: USER_SEARCH_QUERY,
  payload: query,
})
