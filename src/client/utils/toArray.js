import _ from 'lodash'

export default string => {
  // Trim leading and trailing white space.
  // Split array of strings on commas, spaces and periods.
  if (string) return _.trim(string).split(/[ ,.]+/)
  return []
}
