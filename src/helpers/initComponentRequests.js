import { matchRoutes } from 'react-router-config'
import routes from '../client/routes'

// matchRoutes takes in the routes config (StaticRouter) and the current
// request path and returns an array of components that match the paths
// found in the routes config.

// Components which require AJAX requests will have an initData function
// invoked where we can manually pass in the store for it to call dispatch
// on an action creator. This will prefill our Redux store before rendering
// to string.

// Will return an array of unresolved Promises.

export default (req, store) =>
  matchRoutes(routes, req.path).map(
    ({ route }) => (route.initData ? route.initData(store) : null)
  )
