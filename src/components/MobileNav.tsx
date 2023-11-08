import React from 'react'
import FooterNavlinks from './FooterNavlinks'

const MobileNav = () => {
  return (
    <div className='flex ss:hidden w-full h-auto py-10 bg-white  items-center justify-center absolute top-[100px] left-0 z-[10022]'>
      <FooterNavlinks />
    </div>
  )
}

export default MobileNav
