import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSortBy } from '../actions'

import TableEntry from './TableEntry'

const propTypes = {
  data: PropTypes.array,
  setSortBy: PropTypes.func,
}

const Table = ({ data, setSortBy }) => (
  <div>
    {/* Table headers */}
    <div className="clearfix max-auto mb2">
      <div
        onClick={() => setSortBy('id')}
        className="btn col col-1 center underline"
      >
        ID
      </div>
      <div
        onClick={() => setSortBy('joke')}
        className="btn col col-10 center underline"
      >
        Joke
      </div>
      {/* Space for view button */}
      <div className="col col-1" />
    </div>
    {/* Table entries */}
    <div className="clearfix max-auto">
      {data.map(({ id, joke }) => <TableEntry id={id} data={joke} key={id} />)}
    </div>
  </div>
)

Table.propTypes = propTypes

export default connect(null, { setSortBy })(Table)
