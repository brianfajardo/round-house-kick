import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NotFoundPage = ({ staticContext = {} }) => {
  // If this component is rendered, add a pageNotFound property
  // to the staticContext object provided by StaticRouter!
  staticContext.pageNotFound = true

  return (
    <div>
      <p>Uh Oh, page not found (404).</p>
      <Link to="/" href="/">
        Return home?
      </Link>
    </div>
  )
}

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
}

export default NotFoundPage
