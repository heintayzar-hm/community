import { Button } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { logoutFunc } from "../../redux/slices/userSlice/userSlice";

const Logout = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch();
    if (!isLoggedIn) return null
    const handleLogout = () => {
        // handle logout
        dispatch(logoutFunc())
    }
    return (
        <Button
            onClick={
                handleLogout
            }
        >
            Logout
        </Button>
    )
}

export default Logout
