import { useSelector } from 'react-redux'

export default function DashProfile() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div>
            <h1>Profule</h1>
            <form className="flex flex-col">
                <div className="self-center w-32 h-32 ">
                    <img src={currentUser.profilePicture} alt="User" className="rounded-full object-cover w-full h-full border-8 border-[lightgray]" />
                </div>
            </form>
        </div>
    )
}
