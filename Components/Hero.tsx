'use client '

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const Hero = () => {
   
  return (
    <div className='hero'>
     
       <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                  Find, book or rent or buy a car quickly and easily !
            </h1>
            <p className='hero__subtitle'>Stramline your car rental experience with our efforless booking process</p>
            <div className='pt-5'>
            <CustomButton title="Explore Our Collections"  containerStyle='bg-primary-blue p-3 mt-5 text-white px-4 ml-6'/>
            </div>
           
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
  )
}

export default Hero