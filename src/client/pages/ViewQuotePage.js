import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { decode } from 'he'

class ViewQuotePage extends Component {

  static propTypes = {
    quote: PropTypes.object,
  }

  render() {
    const { id, category, joke } = this.props.quote
    return (
      <div className="clearfix">
        <Link to="/" href="/" className="btn right">Delete</Link>
        {/* Quote block */}
        <div>
          <p className="ml1 mb0">ID: {id}</p>
          <p className="ml1 mt0">Categories: {category || 'not found'}</p>
          <h2 className="center regular italic">{`"${decode(joke)}"`}</h2>
        </div>
        <Link to="/" href="/" className="btn right">Back</Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // Filter the array of jokes to return the joke whose
  // id matches the id in the URL param (StaticRouter).
  const quote = state.api.jokes.filter(
    // joke id found in array is of type number,
    // joke id found in URL params is of type string,
    // using loose equality (==) should be okay here :)
    ({ id }) => id == ownProps.match.params.id
  )[0]

  return { quote }
}

export default connect(mapStateToProps)(ViewQuotePage)
