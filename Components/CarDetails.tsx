import React from 'react'
import { CarProps } from './CarCards'


interface CarDetailsProps{
      car:CarProps;
      isOpen:boolean;
      closeModal:()=>void

}

const CarDetails = ({isOpen:,car,closeModal}:CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails