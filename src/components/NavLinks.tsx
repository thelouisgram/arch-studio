import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
    <ul className='hidden ss:flex gap-10 md:gap-16 w-full text-[18px] font-semibold h-full items-center'>
      <Link href='portfolio' className='cursor-pointer hover:text-darkGrey'>Portfolio</Link>
      <Link href='about' className='cursor-pointer hover:text-darkGrey'>About Us</Link>
      <Link href='contact' className='cursor-pointer hover:text-darkGrey'>Contact</Link>
    </ul>
  )
}

export default NavLinks
