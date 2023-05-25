import '../app/globals.css'
import {AiOutlineClose} from "react-icons/ai"

function ResNav({ closeNav }) {

  return (
    <div className='overlay duration-300 pt-0 mt-0' onClick={closeNav}>
        <div className='nav-responsive-container'>
        <button className='cursor-pointer mt-5 w-full ml-3' onClick={closeNav}>
           <AiOutlineClose className='text-white text-2xl text-right' />
        </button>
        <ul className='nav-responsive-ul uppercase'>
        <li>
              <a href="#">Home</a>
            </li>
              <li>
              <a href="#about">About</a>
              </li>
              <li>
              <a href="#services">Services</a>
              </li>
              <li>
              <a href="#pricing">Pricing</a>
              </li>
              <li>
              <a href="#testimonial">Reviews</a>
              </li>
              <li>
              <a href="#contact">Contact</a>
              </li>
    </ul>
    </div>
    </div>
  )
}

export default ResNav