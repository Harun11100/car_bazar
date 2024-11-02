'use client'

import Image from 'next/image';
import React, { MouseEventHandler } from 'react'

interface PropsButton{

 
 containerStyle:string;
 title:string;
 textStyle?:string;
 rightIcon?:string;
 handleButton?:MouseEventHandler<HTMLButtonElement>
 // ? for optional
 type?:'button'|'submit' 
}

const CustomButton = ({rightIcon,containerStyle,handleButton,title,textStyle,type}:PropsButton ) => {
  return (
  <button
  disabled={false}
  type={'Button'}
  className={`rounded-full cursor-pointer hover:bg-blue-800  ${containerStyle}`}
  onClick={handleButton}>
       
       <span className={`flex-1 ${textStyle}`}>{title}</span>
      
      {/* {rightIcon &&
      <div className='w-3 h-3'>
      
      <Image
        src={rightIcon}
        alt='righticon'
        fill
        className='object-contain'
        />
         </div>
        } */}
    
     
     
       
      
  </button>
  )
}

export default CustomButton