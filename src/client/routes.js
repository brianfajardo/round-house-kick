import App from './App'
import NotFoundPage from './pages/NotFoundPage'

// renderRoutes from the react-router-config library takes in
// an array of objects containing a component and its path.
const routes = [
  {
    component: App,
    routes: [
      // If a path is not matched, show the NotFoundPage.
      { component: NotFoundPage },
    ],
  },
]

export default routes
