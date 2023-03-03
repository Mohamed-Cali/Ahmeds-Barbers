import { data } from 'autoprefixer';
import Link from 'next/link';
import React from 'react'
import {AiFillMail, 
  AiOutlineWhatsApp,  
  AiFillFacebook,
  AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <footer className='bg-black text-white pt-10'>
      <div className='max-w-[1200px] gap-10 mx-auto grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-3 pb-4'>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>I UNISEX</h4>
          <p className='text-xs lg:text-sm text-center lg:text-start'>Elevate your appearance through our<br/> exceptional styling services.</p>
          <div className='flex items-center gap-4 justify-center lg:justify-start'>
            <a href='https://www.facebook.com/people/Salon-frizeriecoafor-I-unisex/100063618157989/'>
             <AiFillFacebook />
            </a>
          </div>
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Contact</h4>
          <address className='text-sm font-light'>113A Kingsley Rd, Lampton, Hounslow TW3 4AJ</address>
          <p className='flex flex-col text-center lg:text-start'>
            <span className='text-light text-xs lg:text-sm'>07397 512044</span>
          </p>
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Opening Hours</h4>
          <p className='grid grid-cols-2 gap-10'>
            <span className='text-xs lg:text-sm'>Monday - Sunday</span>
            <span className='text-xs lg:text-sm text-end'>9am - 6pm</span>
          </p>
        </section>
      </div>
      <div className='border-t pt-2 pb-2'>
      <p className='text-center text-gray-300 text-xs md:text-sm lg:text-base'>&copy; IUnisex {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;