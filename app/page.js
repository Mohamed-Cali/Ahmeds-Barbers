import Image from 'next/image'
import { Inter } from 'next/font/google'
import {GoPrimitiveDot} from "react-icons/go";
import {AiOutlineArrowDown, AiFillPhone} from "react-icons/ai"
import Link from 'next/link';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const phoneNumber = '02087445224';

  return (
    <div>
      <div>
      <header className='font-poppins h-screen relative mt-20'>
        <img src='/images/image1.jpeg' alt="woman" className="absolute inset-0 h-full bg-cover bg-center w-full z-0 hidden sm:block" />
        <img src='/images/image1.jpeg' alt="woman" className="block absolute inset-0 bg-cover h-full  sm:hidden" />
        <div className="absolute inset-0 h-full bg-black/40 z-10"></div>
        <section className='text-white max-w-[1200px] mx-auto h-full flex items-center justify-center relative z-20'>
          <div className='flex flex-col items-center justify-center space-y-5'>
            <h4 className='mb-12 flex item-center p-5 font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-[90px] tracking-[20px] uppercase gap-0 lg:gap-5'>
              BEAUTY, COSMETIC & PERSONAL CARE
            </h4>
          <Link href='/services' className='mt-30 lg:mt-30 bg-blue-400 w-200 text-black p-2 rounded-full animate-bounce duration-300'>
          <div className='flex pl-4 pr-5 text-3xl w-100 justify-between'>
            <span className='pl-3 pr-0'>Our Services</span>
          </div>
          </Link>
          </div>
        </section>
      </header>
      </div>

      <div>
        <section className='features'>
        <div className="w-full">
          <img src='/images/image2.jpeg' alt="woman" className='w-full'/>
        </div>
        <div className="feature-flex">
          <h3 className="uppercase font-bold text-xl">Our success secret</h3>
          <p className="text-center max-w-[600px] mx-auto">
          We hold the belief that each individual deserves to possess luscious and healthy hair, which is why we've created a variety of hair care services that cater to the distinct requirements and preferences of every client. Our proficient team of stylists are committed to providing top-notch care and attention, ensuring that you receive the finest quality service.
          </p>
        </div>
        <div className="feature-flex-2">
          <h3 className="uppercase font-bold text-xl">How we do it</h3>
          <p className="text-center max-w-[600px] mx-auto">
          At our salon, our primary focus is on delivering exceptional hair care services to our clients. We utilize premium products and cutting-edge techniques to ensure that your hair not only looks but also feels its absolute best. Our stylists are trained to actively listen to your needs and preferences, collaborating with you to achieve the exact look you desire. You can rely on us to provide you with a flawless hair transformation.
          </p>
        </div>
        <div className="w-full">
          <img src='/images/image3.jpeg' alt="hair" className="text-gray object-cover w-full" />
        </div>
      </section>  
     </div>    
    </div>

  )
}
