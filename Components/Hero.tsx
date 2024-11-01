'use client '

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const Hero = () => {
      const handleScroll=()=>{

      }
  return (
    <div className='hero'>
     
       <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title text-center'>
                  Find, book or rent or buy a car quickly and easily !
            </h1>
            <p className='hero__subtitle text-center'>Stramline your car rental experience with our effforless booking process</p>
            <div className='pt-5'>
            <CustomButton title="Explore Our Collections" handleButton={handleScroll()} containerStyle='px-4 ml-6'/>
            </div>
            <div className='hero__image-container'>
               <div className='hero__image'>
               <Image
               src='/hero.png'
               alt='hero'
               fill
               className='object-contain'/>
               <div className='hero__image-overlay'/>
               </div>
              
            </div>
       </div>
    </div>
  )
}

export default Hero