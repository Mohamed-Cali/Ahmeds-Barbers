import '../app/page.css'
import Gallery from './Gallery'

function About() {
  return (
    <div>
        <section id="about" className=''>
          <div className="container pt-10">
            <div className="section-header">
              <h2 className="fs-1 uppercase">About us</h2>
            </div>

            <div className="col-2-grid2">
              <img src="/images/image7.jpeg" alt="about us" />
              <div className="content">
                <h3 className="fs-3">
                  Our success secret
                </h3>
                <p className='mb-6'>
                We believe in beautiful, healthy hair for all. That's why we provide customized services to meet your unique needs. Our skilled stylists are dedicated to delivering excellent care and ensuring your satisfaction.
                </p>
                <p className='mb-6'>
                We focus on exceptional hair care services at our salon. With premium products and advanced techniques, we aim to enhance the look and feel of your hair. Our stylists listen to your preferences and work with you to achieve your desired look.                </p>
                <a href="#services" className="btn">Services</a>
              </div>
            </div>
            <div>
              <Gallery/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About