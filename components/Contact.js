
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AiFillFacebook,
  AiFillInstagram
} from "react-icons/ai"
import '../app/page.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faLocation, faClock} from '@fortawesome/free-solid-svg-icons';


library.add(faPhone, faLocation, faClock, );


function Contact() {

    const phoneNumber = '020 8744 5224';

  return (
    <div>
        <section id="contact">
          <div className="container pt-12">
            <div className="section-header">
              <h2 className="fs-1 uppercase">Contact Us</h2>
            </div>

            
            <div className="col-3-grid2">
              <a className='cursor-pointer' href={`tel:${phoneNumber}`}>
                <div className="contact-info hover-effect">
                  <div className="icon-box">
                    <FontAwesomeIcon icon="phone" className="icon"/>
                  </div>
                  <h6 className="fs-4">Call us:</h6>
                  <span>{phoneNumber}</span>
                </div>
              </a>

              <a className='cursor-pointer' href='https://www.instagram.com/berniscutz/?hl=en'>
                <div className="contact-info hover-effect">
                  <div className="icon-box">
                    <AiFillInstagram icon="phone" className="icon"/>
                  </div>
                  <h6 className="fs-4">Instagram</h6>
                  <span>@berniscutz</span>
                </div>
              </a>
              
              <a className='cursor-pointer' href='https://www.facebook.com/p/Bernis-Cutz-100063505243672/'>
                <div className="contact-info hover-effect">
                  <div className="icon-box">
                    <AiFillFacebook icon="phone" className="icon"/>
                  </div>
                  <h6 className="fs-4">Facebook</h6>
                </div>
              </a>
            </div>
            <div className='map'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19890.312258529208!2d-0.3583703675073569!3d51.452849546063156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c8e20816753%3A0xaf52e788eb903628!2sBernis%20Cutz!5e0!3m2!1sen!2suk!4v1683072754858!5m2!1sen!2suk" className='w-full h-full' ></iframe>
            </div>
          </div>
          
        </section>
    </div>
  )
}

export default Contact