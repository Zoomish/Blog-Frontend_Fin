import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='flex items-center'>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Zoomish
        </span>
        Blog
      </Link>
    </Navbar>
  )
}
