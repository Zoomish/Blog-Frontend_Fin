import { Navbar, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Zoomish
        </span>
        Blog
      </Link>
      <form>
        <TextInput
        type='text'
        placeholder='Search'
        rightIcon={AiOutlineSearch}
        />
      </form>
    </Navbar>
  )
}
