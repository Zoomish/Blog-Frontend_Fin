import { Link } from "react-router-dom";
import { Button, Label, TextInput } from 'flowbite-react';

export default function SingUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl justify-between mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Zoomish
            </span>
            Blog
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                name='username'
                placeholder='Username'
                required
              />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput
                type='text'
                name='email'
                placeholder='Email'
                required
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>
            <Button gradientDuoTone='purpleToBlue' type="submit">Sign Up</Button>
          </form>
        </div>
      </div >
      SingUp
    </div >
  )
}
