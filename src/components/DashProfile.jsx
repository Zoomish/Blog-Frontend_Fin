import { useSelector } from 'react-redux'
import { Button, TextInput } from 'flowbite-react'
import { useRef, useState } from 'react'

export default function DashProfile() {
    const { currentUser } = useSelector(state => state.user)
    const [imageFile, setImageFile] = useState(null)
    const [imageFileUrl, setImageFileUrl] = useState(null)
    const filePickerRef = useRef(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageFile(file)
            setImageFileUrl(URL.createObjectURL(file))
        }
    }

    return (
        <div className="max-w-lg mx-auto p-3 w-full">
            <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
            <form className="flex flex-col gap-4">
                <input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />
                <div className="self-center w-32 h-32 cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => filePickerRef.current.click()}>
                    <img src={imageFileUrl || currentUser.profilePicture} alt="User" className="rounded-full object-cover w-full h-full border-8 border-[lightgray]" />
                </div>
                <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username} />
                <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email} />
                <TextInput type='password' id='password' placeholder='Password' />
                <Button gradientDuoTone='purpleToBlue' type="submit" outline>Save</Button>
            </form>
            <div className="mt-5 text-red-500 flex justify-between">
                <span className="cursor-pointer">Delete account</span>
                <span className="cursor-pointer">Sign out</span>
            </div>
        </div>
    )
}
