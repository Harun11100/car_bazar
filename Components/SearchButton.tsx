import Image from 'next/image'
import React from 'react'

const SearchButton = ({otherClasses}:{otherClasses:string}) => {
  return (
    
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
        src='/magnifying-glass.svg'
        alt='magnifyingGlass'
        width={40}
        height={40}
        />
    </button>
  )
}

export default SearchButton