import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Portfolio from './buttons/Portfolio'

const Footer = () => {
  return (
    <div className="px-20 w-full h-[205px] flex items-center">
      <Link
        href="/"
        className="h-[205px] min-w-[198px] bg-dark flex justify-center items-center cursor-pointer"
      >
        <Image
          src="/assets/icons/logo-white.svg"
          alt="logo"
          width={97}
          height={40}
        />
      </Link>
      <div className="w-full h-full relative flex items-center">
        <div className="w-[80%] lg:w-[85%] bg-grey pl-16 h-full items-center">
          <NavLinks />
        </div>
        <div className='absolute right-0'>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Footer
