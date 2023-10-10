import { createBrowserRouter } from 'react-router-dom'
import HomeScreen from '../Pages/HomeScreen'

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element:<HomeScreen/>
    }
])

export default mainRouter