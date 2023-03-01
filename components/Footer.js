import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react'
import {AiFillMail, 
  AiOutlineWhatsApp,  
  AiFillFacebook,
  AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white pt-10'>
      <div className='max-w-[1200px] gap-10 mx-auto grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-3 pb-4'>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>BERNI'S CUTZ</h4>
          <p className='text-xs lg:text-sm text-center lg:text-start'>Transform your look with<br/> our top-quality styling services</p>
          <div className='flex items-center gap-4 justify-center lg:justify-start'>
            <a href='https://www.facebook.com/profile.php?id=100063505243672&sk=about'>
             <AiFillFacebook />
            </a>
            <a href='https://www.instagram.com/berniscutz/?hl=en'>
             <AiFillInstagram />
            </a>
            
          </div>
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Contact</h4>
          <address className='text-sm font-light'>22 The Grn, Twickenham TW2 5AB</address>
          <p className='flex flex-col text-center lg:text-start'>
            <span className='text-light text-xs lg:text-sm'>020 8744 5224</span>
          </p>
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Opening Hours</h4>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Tuesday - Saturday</span>
            <span className='text-xs lg:text-sm text-end'>9am - 6pm</span>
          </p>
         
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Sunday</span>
            <span className='text-xs lg:text-sm text-end'>Closed</span>
          </p>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Monday</span>
            <span className='text-xs lg:text-sm text-end'>Closed</span>
          </p>
        </section>
      </div>
      <div className='border-t pt-2 pb-2'>
      <p className='text-center text-gray-300 text-xs md:text-sm lg:text-base'>&copy; Berni'sCutz {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;