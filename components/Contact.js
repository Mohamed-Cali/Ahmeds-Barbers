
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

    const phoneNumber = '07565400486';

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

              <div className='cursor-pointer'>
                <div className="contact-info hover-effect">
                  <div className="icon-box">
                  <FontAwesomeIcon icon="location" className="icon"/>
                  <p>250 Twickenham Rd <br /> Isleworth TW7 7DT</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='map'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4971.731231243312!2d-0.34044422181290546!3d51.46062371850975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d3874efa1b7%3A0xa01bff0add87ad42!2sAhmed%E2%80%99s%20Barbers!5e0!3m2!1sen!2suk!4v1685024725497!5m2!1sen!2suk" className='w-full h-full' ></iframe>
            </div>
          </div>
          
        </section>
    </div>
  )
}

export default Contact