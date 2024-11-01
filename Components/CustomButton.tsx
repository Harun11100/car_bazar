'use client'

import React, { MouseEventHandler } from 'react'

interface PropsButton{

 
 containerStyle:string;
 title:string;
 handleButton?:MouseEventHandler<HTMLButtonElement>// ? for optional

}

const CustomButton = ({containerStyle,handleButton,title}:PropsButton ) => {
  return (
  <button
  disabled={false}
  type={'Button'}
  className={`bg-blue-700 text-white rounded-full cursor-pointer hover:bg-blue-800 p-3 mt-10 ${containerStyle}`}
  onClick={handleButton}>
      <span className={'flex-1'}>{title}</span>
  </button>
  )
}

export default CustomButton