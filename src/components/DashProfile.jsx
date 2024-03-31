import { useSelector } from 'react-redux'
import { TextInput } from 'flowbite-react'

export default function DashProfile() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div className="max-w-lg mx-auto p-3 w-full">
            <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
            <form className="flex flex-col">
                <div className="self-center w-32 h-32 cursor-pointer shadow-md overflow-hidden rounded-full">
                    <img src={currentUser.profilePicture} alt="User" className="rounded-full object-cover w-full h-full border-8 border-[lightgray]" />
                </div>
                <TextInput/>
            </form>
        </div>
    )
}
