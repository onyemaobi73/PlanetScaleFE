import {createBrowserRouter} from "react-router-dom"
// import Register from "../pages/auth/Register"
// import SignIn from "../pages/auth/SignIn"
import LayOut from "../components/common/LayOut"
import HomeScreen from "../pages/screen/HomeScreen"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element:<LayOut />,
        children:[
            {
                index:true,
                element:<HomeScreen />
            }
        ]
    }
])