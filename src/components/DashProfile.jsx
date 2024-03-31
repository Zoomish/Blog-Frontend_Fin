import { useSelector } from 'react-redux'

export default function DashProfile() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div>
            <h1>Profule</h1>
            <form>
                <img src={currentUser.profilePicture} alt="" />
            </form>
        </div>
    )
}
