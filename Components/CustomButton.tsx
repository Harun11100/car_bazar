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
  className={`rounded-full cursor-pointer  ${containerStyle}`}
  onClick={handleButton}>
       
       <span className={`flex-1 ${textStyle}`}>{title}</span>
      
  </button>
  )
}

export default CustomButton