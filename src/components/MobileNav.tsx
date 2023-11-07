import React from 'react'
import FooterNavlinks from './FooterNavlinks'

const MobileNav = () => {
  return (
    <div className='w-full h-[200px] py-10 bg-white flex items-center justify-center absolute top-[100px] left-0 z-[10022]'>
      <FooterNavlinks />
    </div>
  )
}

export default MobileNav
