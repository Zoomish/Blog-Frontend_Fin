import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';

export default function OAuth() {
    return (
        <Button type='button' gradientDuoTone='pinkToOrange' outline>
            <AiFillGoogleCircle/> Continue with Google
        </Button>
    )
}
