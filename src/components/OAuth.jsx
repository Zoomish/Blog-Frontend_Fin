import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export default function OAuth() {
    const auth = getAuth();

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const result = await signInWithPopup(auth, provider);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className='w-6 h-6 mr-2' /> Continue with Google
        </Button>
    )
}
