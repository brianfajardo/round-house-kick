import axios from 'axios'
import { FETCH_JOKES } from './actionTypes'

// Fetching multiple random jokes
const BASE_URL = 'https://api.icndb.com'
const quantity = 10

export const fetchJokes = () => async dispatch => {
  const request = await axios.get(`${BASE_URL}/jokes/random/${quantity}`)
  return dispatch({ type: FETCH_JOKES, payload: request.data.value })
}
