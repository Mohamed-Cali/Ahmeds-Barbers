
import {
  SlSocialFacebook, 
  SlSocialInstagram
} from "react-icons/sl"
import {FiMail} from "react-icons/fi"
import {AiFillPhone} from "react-icons/ai"
import '../globals.css'

const page = () => {

  const phoneNumber = '02087445224';

  return (
    <section className='min-h-screen w-full py-20'>
      <h1 className='mb-12 mt-24 text-center font-bold text-4xl'>Contact Us</h1>
      <div className='max-w-7xl mx-auto px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='flex flex-col align-middle justify-center gap-3'>
          <div className='contact-box flex align-top'>
          <a className='flex cursor-pointer' href={`tel:${phoneNumber}`}>
              <div className='p-6 bg-blue-300 rounded-full mr-5'>
                <AiFillPhone className='text-black text-lg' />
              </div>
              <div className='flex flex-col space-y-1'>
                <span className='font-bold'>Phone Number</span>
                <span className='font-thin'>{phoneNumber}</span>
              </div>
            </a>
          </div>
          <div className='contact-box'>
          <a className='flex self-center w-full cursor-pointer' href='https://www.instagram.com/berniscutz/?hl=en'>
              <div className='p-6 bg-blue-300 rounded-full mr-5'>
              <SlSocialInstagram className='text-black text-lg' />
              </div>
              <div className='flex space-y-1'>
                <span className='font-bold self-center'>Instagram</span>
              </div>
            </a>
          </div>
          <div className='contact-box flex w-full'>
            <a className='flex self-center w-full cursor-pointer' href='https://www.facebook.com/profile.php?id=100063505243672&sk=about'>
              <div className='p-6 bg-blue-300 rounded-full mr-5'>
              <SlSocialFacebook className='text-black text-lg' />
              </div>
              <div className='flex justify-center space-y-1'>
                <span className='font-bold self-center'>Facebook</span>
              </div>
            </a>
          </div>
          </div>
          <div className='w-full p-2'>
          <iframe 
            className='w-full rounded-md'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9945.153003275003!2d-0.34961555126847776!3d51.45286389557606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c8e20816753%3A0xaf52e788eb903628!2sBernis%20Cutz!5e0!3m2!1sen!2suk!4v1677661140659!5m2!1sen!2suk" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default page;