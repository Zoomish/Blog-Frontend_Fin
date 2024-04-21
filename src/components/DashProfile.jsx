import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    updateFailed,
    updateStart,
    updateSuccess,
} from '../redux/user/userSlice';

export default function DashProfile() {
    const { currentUser } = useSelector((state) => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUplaoding, setImageFileUploading] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
    const [imageFileUplaodProgress, setImageFileUplaodProgress] =
        useState(null);
    const [imageFileUplaodError, setImageFileUplaodError] = useState(null);
    const filePickerRef = useRef(null);
    const dispath = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };
    useEffect(() => {
        if (imageFile) {
            uploadImage();
        }
    }, [imageFile]);

    const uploadImage = async () => {
        setImageFileUploading(true);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + imageFile.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        setImageFileUplaodError(null);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImageFileUplaodProgress(progress.toFixed(0));
            },
            () => {
                setImageFileUplaodError('Error while uploading image');
                setImageFileUplaodProgress(null);
                setImageFileUrl(null);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageFileUrl(downloadURL);
                    setFormData({ ...formData, profilePicture: downloadURL });
                    setImageFileUploading(false);
                });
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(formData).length === 0) {
            return;
        }
        if (imageFileUplaoding) {
            return;
        }
        try {
            dispath(updateStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                dispath(updateFailed(data.message));
                return;
            } else {
                dispath(updateSuccess(data));
                setUpdateUserSuccess('Profile updated successfully');
                setFormData({});
            }
        } catch (error) {
            dispath(updateFailed(error));
            setImageFileUploading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-3 w-full">
            <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={filePickerRef}
                    hidden
                />
                <div
                    className="relative self-center w-32 h-32 cursor-pointer shadow-md overflow-hidden rounded-full"
                    onClick={() => filePickerRef.current.click()}
                >
                    {imageFileUplaodProgress && (
                        <CircularProgressbar
                            value={imageFileUplaodProgress || 0}
                            text={`${imageFileUplaodProgress}%`}
                            strokeWidth={5}
                            styles={{
                                root: {
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                },
                                path: {
                                    stroke: `rgba(62, 152, 199, ${imageFileUplaodProgress / 100})`,
                                },
                            }}
                        />
                    )}
                    <img
                        src={imageFileUrl || currentUser.profilePicture}
                        alt="User"
                        className={`rounded-full object-cover w-full h-full border-8 border-[lightgray] ${imageFileUplaodProgress && imageFileUplaodProgress < 100 && 'opacity-60'}`}
                    />
                </div>
                {imageFileUplaodError && (
                    <Alert color="failure">{imageFileUplaodError}</Alert>
                )}
                <TextInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    defaultValue={currentUser.username}
                    onChange={handleChange}
                />
                <TextInput
                    type="email"
                    id="email"
                    placeholder="Email"
                    defaultValue={currentUser.email}
                    onChange={handleChange}
                />
                <TextInput
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <Button gradientDuoTone="purpleToBlue" type="submit" outline>
                    Save
                </Button>
            </form>
            <div className="mt-5 text-red-500 flex justify-between">
                <span className="cursor-pointer">Delete account</span>
                <span className="cursor-pointer">Sign out</span>
            </div>
            {updateUserSuccess && (
                <Alert color="success" className='mt-5'>{updateUserSuccess}</Alert>
            )}
        </div>
    );
}
