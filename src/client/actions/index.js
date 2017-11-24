import axios from 'axios'
import { FETCH_JOKES } from './actionTypes'

// Fetching multiple random jokes
const BASE_URL = 'https://api.icndb.com'
const quantity = 550

export const fetchJokes = () => async dispatch => {
  console.log('2. FETCHJOKES INVOKED')
  const request = await axios.get(`${BASE_URL}/jokes/random/${quantity}`)
  console.log('3. API RESPONSE:', request)
}
