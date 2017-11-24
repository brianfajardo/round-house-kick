import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  entryInput: PropTypes.string,
  entryCategories: PropTypes.string,
  handleEntryInput: PropTypes.func,
  handleEntryCategories: PropTypes.func,
  handleFormSubmit: PropTypes.func,
}

const CreateEntry = ({
  entryInput,
  entryCategories,
  handleEntryInput,
  handleEntryCategories,
  handleFormSubmit,
}) => (
  <form onSubmit={handleFormSubmit} className="center col col-12">
    <input
      type="text"
      value={entryInput}
      onChange={handleEntryInput}
      placeholder="Got a funny one?"
      className="input center col-5 inline"
    />
    <input
      type="text"
      value={entryCategories}
      onChange={handleEntryCategories}
      placeholder="Add categories"
      className="input center col-3 inline"
    />
    <button type="submit" className="btn">Submit</button>
  </form>
)

CreateEntry.propTypes = propTypes

export default CreateEntry
