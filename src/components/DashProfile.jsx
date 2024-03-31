import { useSelector } from 'react-redux'
import { Button, TextInput } from 'flowbite-react'
import { useEffect, useRef, useState } from 'react'
import { getStorage } from 'firebase/storage'
import { app } from '../firebase'

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
    useEffect(() => {
        if (imageFile) {
            uploadImage()
        }
    }, [imageFile])

    const uploadImage = async () => {
        // service firebase.storage {
        //     match /b/{bucket}/o {
        //       match /{allPaths=**} {
        //         allow read;
        //         allow write: if
        //         request.resource.size < 2 * 1024 * 1024 &&
        //         request.resource.contentType.matches('image/.*')
        //       }
        //     }
        //   }
        const storage = getStorage(app)
        const fileName = new Date().getTime() + imageFile.name
        const storageRef = ref(storage, fileName)
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
