import Search from '../views/Search'
import Login from '../views/Login'

const routes = [
    {
        path: '/',
        element: <Search />,
    },
    {
        path: '/login',
        element: <Login />,
    }
]

export default routes
