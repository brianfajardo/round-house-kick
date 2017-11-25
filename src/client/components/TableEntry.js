import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// Escapes HTML entities like &quot; found in string from API.
import { decode } from 'he'

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.string,
}

const TableEntry = ({ id, data }) => (
  <div className="col col-12 mb2">
    <div className="col col-1 center max-auto">{id}</div>
    <div className="col col-10 center max-auto">{decode(data)}</div>
    <Link
      as="button"
      to={`/view/${id}`}
      href={`/view/${id}`}
      className="btn col col-1 center max-auto p0"
    >
      View
    </Link>
  </div>
)

TableEntry.propTypes = propTypes

export default TableEntry
