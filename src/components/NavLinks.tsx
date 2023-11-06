import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
    <ul className='flex gap-16 text-[16px] font-semibold h-full items-center'>
      <Link href='portfolio' className='cursor-pointer hover:text-darkGrey'>Portfolio</Link>
      <Link href='about' className='cursor-pointer hover:text-darkGrey'>About Us</Link>
      <Link href='contact' className='cursor-pointer hover:text-darkGrey'>Contact</Link>
    </ul>
  )
}

export default NavLinks
