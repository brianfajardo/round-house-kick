import React from 'react'
import PropTypes from 'prop-types'

const CreateEntry = ({ handleEntryInput, inputValue, handleFormSubmit }) => (
  <form onSubmit={handleFormSubmit} className="center col col-12">
    <input
      type="text"
      value={inputValue}
      onChange={handleEntryInput}
      placeholder="Got a funny one?"
      className="input center col-4 inline"
    />
    <button type="submit" className="btn">Submit</button>
  </form>
)

CreateEntry.propTypes = {
  handleEntryInput: PropTypes.func,
  inputValue: PropTypes.string,
  handleFormSubmit: PropTypes.func,
}

export default CreateEntry
