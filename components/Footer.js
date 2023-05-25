import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  AiFillFacebook,
  AiFillInstagram
} from "react-icons/ai"
import '../app/page.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faLocation, faClock} from '@fortawesome/free-solid-svg-icons';


library.add(faPhone, faLocation, faClock, );


const Footer = () => {
  const phoneNumber = '07565400486';

  return (
    <footer >
      <section id="footer">
        {/* <img src="images/footer-img.png" class="footer-img"/> */}
        <div class="title-text mb-20">
            <h1 className='text-3xl text-center font-semibold uppercase'>Visit Us Today</h1>
        </div>
        <div class="footer-row">
            <div class="footer-left">
                <h1>Opening Hours</h1>
                <div className='right flex flex-row justify-start'>
                <FontAwesomeIcon icon="clock" className="icon3"/>
                <p><i class="fa fa-clock-o"></i>Monday to Saturday - 9am to 6pm</p>
                </div>

                <div className='right flex flex-row justify-start'>
                <FontAwesomeIcon icon="clock" className="icon3"/>
                <p><i class="fa fa-clock-o"></i>Sunday - 10am to 4pm</p>
                </div>
            </div>
            <div class="footer-right">
                <h1>Get In Touch</h1>
                <div className='right flex flex-row justify-end'>
                  <p>250 Twickenham Rd, Isleworth TW7 7DT</p>
                  <FontAwesomeIcon icon="location" className="icon2"/>
                </div>
                
                <a className='cursor-pointer' href={`tel:${phoneNumber}`}>
                  <div className='right flex flex-row justify-end' >
                    <p>{phoneNumber}</p>
                    <FontAwesomeIcon icon="phone" className="icon2"/>
                  </div>
                </a>
            </div>
        </div>
     </section>
    </footer>
  )
}

export default Footer;