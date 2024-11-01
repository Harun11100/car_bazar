import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <footer className='max-w-[1140px] px-5 md:px-10 mx-auto pb-10'>
     
      <div>
            <Image src='/logo.png'  alt='logo'
            height={100} width={100}/>
      </div>
       <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga expedita, esse laboriosam exercitationem quae veritatis illo molestiae dolore nihil recusandae excepturi, consequatur nulla deserunt culpa vitae officia et quo.</p>
       </div>

   </footer>
  )
}

export default Footer