import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export default function PrivateRouter() {
    const { currentUser } = useSelector(state => state.user)
    return currentUser ? <Outlet /> : null
}
