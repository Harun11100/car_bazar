import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Navbar = () => {
      
const handleSignup=()=>{

      }
  return (
   <header className='w-full absolute z-10 '>
      <nav className=' max-w-[1140px] px-5 md:px-10 mx-auto flex justify-between' >
            <Link href={'/'}>
            <Image
            src='/logo.png'
            alt='logo'
            width={100}
            height={100}
            className='pt-7'/>
            </Link>
            <Link href={'/signup'}>
            <div>
            <CustomButton 
            title='Sign-in'
            type='button'
            containerStyle='bg-white p-3 mt-10 text-blue-500 border'
            />
            </div>
            </Link>
           
       
      
      </nav>
      <div>
       
      </div>
   </header>
  )
}

export default Navbar