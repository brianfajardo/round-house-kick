import React from 'react'
import PropTypes from 'prop-types'
import { decode } from 'he'

const Table = ({ data }) => (
  <div>
    <div className="clearfix max-auto mb2">
      <div className="col col-1 center underline">ID</div>
      <div className="col col-10 center underline">Joke</div>
      <div className="col col-1 center underline" />
    </div>
    <div className="clearfix max-auto">
      {data.map(entry => (
        <div key={entry.id} className="col col-12 mb2">
          <div className="col col-1 center max-auto">{entry.id}</div>
          <div className="col col-10 center max-auto">{decode(entry.joke)}</div>
          <div className="col col-1 center max-auto">View</div>
        </div>
      ))}
    </div>
  </div>
)

Table.propTypes = {
  data: PropTypes.array,
}

export default Table
