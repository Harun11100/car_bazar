'use client'

import React from 'react'

interface CarProps{
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
      year: string

}

interface CarCardProps{
  car:CarProps
}

const CarCards = ({car}:CarCardProps) => {
 
      const {city_mpg,year,make,model,transmission,fuel_type,drive}=car
 
 
      return (
    <div className='car-card group'>

      <div className='car-card_content'>
            <h2 className='card-card__content-title'>
                  {make}{model}
            </h2>

      </div>
      <p>
        <span>Car rent..</span>
      </p>

    </div>
  )
}

export default CarCards