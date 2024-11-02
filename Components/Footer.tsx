import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className='footer px-10'>
     <div className='footer__links-container'>
      <div className='px-16  pb-10'>
            <Image src='/logo.png'  alt='logo'
            height={100} width={100}
            className=''/>
            <p >CarBazar 2025<br/>
            All right reserved ©</p>
      </div>
      
         <div className='footer__links'>
             {footerLinks.map(link=>
               <div key={link.title} className='footer__link'>
                  <h3 className='font-bold'>{link.title}</h3>
                  {link.links.map(item=>(
                     <Link key={item.title} href={item.url}>
                        
                        {item.title}
                         
                     </Link>
                  ))}

               </div>
             )}
         </div>
         <div>

         </div>
         </div>
         <div className='footer__copyrights'>
         <p >CarBazar 2025
         All right reserved ©</p>
         <div className='footer__copyrights-link'>
            <Link href="/" >
               Privacy policy
            </Link>
            <Link href="/" >
              Terms & conditions
            </Link>
         </div>

         </div>
    
   </footer>
  )
}

export default Footer