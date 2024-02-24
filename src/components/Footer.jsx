import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function FooterComponent() {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div>
                <div>
                    <div>
                        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                                Zoomish
                            </span>
                            Blog
                        </Link>
                    </div>
                    <div className='gird grid-cols-2 gap-3 sm:mt-4 sm:gird-cols-4 sm:gap-6'>
                        <Footer.Title title="About" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="/about" target='_blank'>About</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
        </Footer>
    )
}
