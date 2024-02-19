import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl justify-between mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="">
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
        <div className="">
          <form>
            <div>
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Username
              </label>
            </div>
          </form>
        </div>
      </div >
      SingUp
    </div >
  )
}
