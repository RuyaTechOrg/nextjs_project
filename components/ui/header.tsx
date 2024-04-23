import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import logoImg from '../../public/images/Untitled-1-03-removebg-preview.png';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
             {/* <Image src={logoImg} alt='img here' width={350} height={350} className="mx-auto md:ml-[-100px]"/> */}
             <h3 className="h1 mb-4 mt-3" data-aos="fade-up">G<strong className='text-green-500'>u</strong>m<strong className='text-green-500'>o</strong>n<strong className='text-green-500'>d</strong>a</h3>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-white-600 hover:text-green-700 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
              About us
                </Link>
              </li>
              <li>
              <Link href="/signup" className="btn-sm text-white  hover:text-linkHovertxt-500">
              IOT
              </Link>
              <Link href="/signup" className="btn-sm text-white  hover:text-linkHovertxt-500">
              Development
              </Link>
              <Link href="/signup" className="btn-sm text-white  hover:text-linkHovertxt-500">
              Web 3
              </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
