import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Portfolio from './buttons/Portfolio'

const Footer = () => {
  return (
    <div className='px-20 w-full h-[205px] flex relative items-center'>
      <Link href='/' className='h-[205px] w-[197px] bg-dark flex justify-center items-center cursor-pointer'>
        <Image src='/assets/icons/logo-white.svg' alt='logo' width={97} height={40} />
      </Link>
      <div className='w-[75%] bg-grey pl-16 h-full items-center'>
        <NavLinks />
      </div>
      <Portfolio />
    </div>
  )
}

export default Footer
