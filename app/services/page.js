
import Link from 'next/link';
import "./page.css"
import "../globals.css"

const page = () => {
    const phoneNumber = '07565 400486';


  return (
    <section className='section flex flex-col justify-center w-screen text-black py-20 mt-24 mb-4 px-6'>
          <h1 className='mb-12 text-center font-bold text-4xl uppercase'>Services</h1>
           <p className='text-center text-lg lg:w-[60ch] mx-auto pb-7'>
           Let our team of skilled barbers assist you in discovering a style that complements your unique features and personality. Whether you prefer a classic or modern look, our experienced barbers will work with you to achieve the perfect cut, leaving you feeling confident and refreshed.
           </p>
           <div className='service-cards self-center xl:pl-4 xl:pr-4'>

            <div className='service-card'>
                <div className='p-6'>
                <img src='/images/image7.jpeg' alt="hair" className='rounded-3xl w-full max-h-80'/>
                </div>
                <div className='text-center space-y-1'>
                    <h4 className='font-bold text-xl'>Haircut</h4>
                    <p className="text-center ">Our skilled barbers will work with you to achieve the perfect cut, leaving you feeling confident and refreshed.</p>
                </div>
            </div>

            <div className='service-card'>
            <div className='p-6'>
                <img src='/images/image6.jpeg' alt="nails" className='rounded-3xl w-full max-h-80'/>
            </div>
            <div className='text-center space-y-1'>
                <h4 className='font-bold text-xl'>Beard Trim</h4>
                <p className="text-center">We offer a variety of beard trimming services to help you maintain a clean and polished look.</p>
            </div>
            </div>

            <div className='service-card'>
            <div className='p-6'>
                <img src='/images/image8.jpeg' alt="men's haircut" className='rounded-3xl w-full max-h-80' />
            </div>
            <div className='text-center space-y-1'>
                <h4 className='font-bold text-xl'>Children's Haircut</h4>
                <p className="text-center">We're happy to work with children of all ages to help them achieve a look that suits their personality and style.</p>
            </div>
            </div>
           </div>
            <button className='cart-btn mx-auto mt-20 mb-10 extra'>
                <Link target="_blank" href={`tel:${phoneNumber}`}>Book an appointment</Link>
            </button>
    </section>
  )
}

export default page;