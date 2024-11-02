'use client'

import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import CarDetails from './CarDetails'

export interface CarProps{
      city_mpg: number,
      class: string,
      combination_mpg:number,
      cylinders:number,     
      displacement: number,
      drive:string,
      fuel_type:string,
      highway_mpg:number,
      make: string,
      model: string,
      transmission:string
      year: number

}

interface CarCardProps{
  car:CarProps
}

const CarCards = ({car}:CarCardProps) => {

 
      const {city_mpg,year,make,model,transmission,fuel_type,drive}=car
      
      const[open ,setOpen]=useState(false)

      const carRent=calculateCarRent(city_mpg,year)
      const handleClick=()=>{

      }
      return (
    <div className='car-card group'>

      <div className='car-card_content'>
            <h2 className='card-card__content-title'>
                  {make}{model}
            </h2>

      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
        $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
        /day
        </span>
      
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>

            <Image src='/hero.png'
            alt='car model'

            className='object-contain'
            fill priority

            />

      </div>

      <div className='relative flex mt-2 w-full'>
       <div className='flex group-hover:invisible w-full justify-between text-gray'>
            <div className='flex flex-col justify-center items-center gap-2 '>
                  <Image
                   src='/tire.svg'
                   alt='tire'
                   width={20}
                   height={20}
                  />
                  <p className='text-[14px]'>
                       {drive.toUpperCase()}
                  </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
                  <Image
                   src='/gas.svg'
                   alt='tire'
                   width={20}
                   height={20}
                  />
                  <p className='text-[14px]'>
                       {city_mpg} MPG
                  </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 '>
                  <Image
                   src='/steering-wheel.svg'
                   alt='steeringwheel'
                   width={20}
                   height={20}
                  />
                  <p className='text-[14px]'>
                        {transmission==='a'?'Automatic':
                        'Manual'}
                  </p>
            </div>
       </div>
       <div className='car-card__btn-container'>
           <CustomButton title='View more'
           
           containerStyle='w-full bg-primary-blue p-2'
           textStyle='text-white leading-[10px] font-bold'
           rightIcon='/right-arrow.svg'
           handleButton={handleClick}
          />
           
       </div>
      </div>

      <CarDetails isOpen={open} closeModal={()=>setOpen(false)} car={car}/>

    </div>
  )
}

export default CarCards