import { createBrowserRouter } from 'react-router-dom'
import Pricing from '../Pages/components/Pricing'
import Hero from '../Pages/components/Hero'

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element:<Hero/>
    }, {
        path: "/pricing",
        element:<Pricing/>
    }
])

export default mainRouter