import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// Escapes HTML entities like &quot; found in string from API.
import { decode } from 'he'

const propTypes = {
  data: PropTypes.array,
}

const Table = ({ data }) => (
  <div>
    {/* Table headers */}
    <div className="clearfix max-auto mb2">
      <div className="btn col col-1 center underline">ID</div>
      <div className="btn col col-10 center underline">Joke</div>
      {/* Space for view button */}
      <div className="col col-1" />
    </div>
    {/* Table entries */}
    <div className="clearfix max-auto">
      {data.map(({ id, joke }) => (
        <div key={id} className="col col-12 mb2">
          <div className="col col-1 center max-auto">{id}</div>
          <div className="col col-10 center max-auto">{decode(joke)}</div>
          <Link
            as="button"
            to={`/view/${id}`}
            href={`/view/${id}`}
            className="btn col col-1 center max-auto p0"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  </div>
)

Table.propTypes = propTypes

export default Table
