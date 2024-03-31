import { useSelector } from 'react-redux'

export default function DashProfile() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div>DashProfile</div>
    )
}
