'use client'

import React, { MouseEventHandler } from 'react'

interface PropsButton{

 
 containerStyle:string;
 title:string;
 handleButton?:MouseEventHandler<HTMLButtonElement>
 // ? for optional
 type?:'button'|'submit' 
}

const CustomButton = ({containerStyle,handleButton,title,type}:PropsButton ) => {
  return (
  <button
  disabled={false}
  type={'Button'}
  className={` rounded-full cursor-pointer hover:bg-blue-800 p-3 mt-10 ${containerStyle}`}
  onClick={handleButton}>
      <span className={'flex-1'}>{title}</span>
  </button>
  )
}

export default CustomButton