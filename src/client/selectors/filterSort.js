import _ from 'lodash'

export default (data, { searchQuery, searchFilter, sortBy }) => {
  // Remove leading and trailing white space.
  const query = _.trim(searchQuery)

  // Return from function if data from AJAX request doesn't exist yet.
  if (!data) return data

  return (
    data
      // Step 1: Filter data by searchFilter and searchQuery.
      .filter(entry => {
        let isMatch
        const property = entry[searchFilter]

        // Case: searchFilter set to 'categories' where categories is type array.
        // Example: ["nerdy", "explicit"]. Join strings so we can create one big string.
        if (Array.isArray(property)) property.join(' ')

        isMatch = property
          .toString() // id might be a number!
          .toLowerCase() // making the search case-insensitive.
          .includes(query.toLowerCase()) // testing against the search query.

        // Should return a boolean indicating if there was a search match!
        return isMatch
      })
      // Step 2: Sort returned filtered results by the sortBy filter.
      .sort((a, b) => {
        if (sortBy === 'id') {
          return a.id < b.id ? -1 : 1
        } else if (sortBy === 'joke') {
          return a.joke < b.joke ? -1 : 1
        }
      })
  )
}
