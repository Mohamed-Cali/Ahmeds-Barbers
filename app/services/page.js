
import ImgSlider from '@/components/ImgSlider';
import Link from 'next/link';

const page = () => {
    const phoneNumber = '07397 512044';

  return (
    <section className='w-full text-black py-20 mt-24 mb-4 px-6'>
          <h1 className='mb-12 text-center font-bold text-4xl uppercase'>Services</h1>
           <p className='text-center lg:w-[60ch] mx-auto pb-7'>
           Our excellent stylists at the salon are dedicated to making sure that you leave feeling revitalized and confident. Browse through our range of services and book your appointment today.
           </p>
           <div className='service-cards'>

            <div className='service-card'>
                <div className='p-6'>
                <img src='/images/image7.jpeg' alt="hair" className='rounded-3xl w-full max-h-80'/>
                </div>
                <div className='text-center space-y-1'>
                    <h4 className='font-bold text-xl'>Haircut & styling</h4>
                </div>
            </div>

            <div className='service-card'>
            <div className='p-6'>
                <img src='/images/image9.jpeg' alt="nails" className='rounded-3xl w-full max-h-80'/>
            </div>
            <div className='text-center space-y-1'>
                <h4 className='font-bold text-xl'>Manicure & Pedicure</h4>
            </div>
            </div>

            <div className='service-card'>
            <div className='p-6'>
                <img src='/images/image8.jpeg' alt="men's haircut" className='rounded-3xl w-full max-h-80' />
            </div>
            <div className='text-center space-y-1'>
                <h4 className='font-bold text-xl'>Men's Haircut</h4>
            </div>
            </div>
           </div>
            <button className='cart-btn bg-blue-600 mx-auto mt-20 mb-10 extra'>
                <Link target="_blank" href={`tel:${phoneNumber}`}>Book an appointment</Link>
            </button>
           <div className='mt-24 overflow-y-hidden'>
            <h2 className='mb-12 text-center font-bold text-3xl' >See Our Work</h2>
            <ImgSlider/>
           </div>
    </section>
  )
}

export default page;