import axios from 'axios'
import shortid from 'shortid'
import { toArray } from '../utils'
import { FETCH_JOKES, CREATE_ENTRY } from './actionTypes'

// Fetching multiple random jokes
const BASE_URL = 'https://api.icndb.com'
const quantity = 10

export const fetchJokes = () => async dispatch => {
  const request = await axios.get(`${BASE_URL}/jokes/random/${quantity}`)
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
