import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center text-white'>
        <div >
      <Image src={'/nowted-logo.svg'} height={40} width={80} alt='logo nowted app'/>

        </div>

      <button>
        <Image src={'/search-icon.svg'} width={24} height={24} alt='search icon'/>
      </button>
    </div>
  )
}

export default Header
