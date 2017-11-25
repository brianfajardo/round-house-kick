import App from './App'
import HomePage from './pages/HomePage'
import ViewQuotePage from './pages/ViewQuotePage'
import NotFoundPage from './pages/NotFoundPage'

// renderRoutes from the react-router-config library takes in
// an array of objects containing a component and its path.
const routes = [
  {
    // Contains the title which will always be shown
    // regardless of which component is currently being shown.
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage.component,
        initData: HomePage.initData,
      },
      {
        path: '/view/:id',
        component: ViewQuotePage,
      },
      // If a path is not matched, show the NotFoundPage.
      {
        component: NotFoundPage,
      },
    ],
  },
]

export default routes
