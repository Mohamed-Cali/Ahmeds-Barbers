
import {
  CiLocationOn
} from "react-icons/ci"
import {AiFillPhone} from "react-icons/ai"
import '../globals.css'

const page = () => {

  const phoneNumber = '020 8538 9386';

  return (
    <section className='min-h-screen w-full py-20'>
      <h1 className='mb-12 mt-24 text-center font-bold text-4xl uppercase'>Contact Us</h1>
      <div className='max-w-7xl mx-auto px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='flex flex-col align-middle justify-center gap-3'>
          <div className='contact-box flex align-top'>
          <a className='flex cursor-pointer' href={`tel:${phoneNumber}`}>
              <div className='p-6 bg-gray-300 rounded-full mr-5'>
                <AiFillPhone className='text-black text-lg' />
              </div>
              <div className='flex flex-col space-y-1'>
                <span className='font-bold'>Phone Number</span>
                <span className='font-thin'>{phoneNumber}</span>
              </div>
            </a>
          </div>
          
          <div className='contact-box flex w-full'>
              <div className='p-5 bg-gray-300 rounded-full mr-5'>
              <CiLocationOn className='text-black text-2xl' />
              </div>
              <div className='flex justify-center space-y-1'>
                <span className='font-bold self-center'>162 Heath Rd <br/> Twickenham <br/>  TW1 4BN</span>
              </div>
          </div>
          </div>
          <div className='w-full p-2'>
          <iframe 
            className='w-full rounded-md'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19890.312258529208!2d-0.3583703675073569!3d51.452849546063156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c8e884ef4a3%3A0x7fc1c7d7151dc786!2sTwicks%20Barbers!5e0!3m2!1sen!2suk!4v1680743240556!5m2!1sen!2suk" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default page;

