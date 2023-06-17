import { lazy } from "react"
import { ROUTES } from "../constants.js"
import Loading from "../components/Loading/Loading"

const Home = lazy(() => import("../pages/HomePage/HomePage"))

// lazy load routes
export default [
    {
        path: ROUTES.HOME,
        element: <Home />,
        fallback: <Loading />,
    }
]
