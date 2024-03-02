import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider } from 'firebase/auth';

export default function OAuth() {
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
    }
    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
            <AiFillGoogleCircle className='w-6 h-6 mr-2'/> Continue with Google
        </Button>
    )
}
