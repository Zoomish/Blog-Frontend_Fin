import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
    </Navbar>
  )
}
