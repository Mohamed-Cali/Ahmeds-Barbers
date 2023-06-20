import '../app/page.css'

function About() {
  return (
    <div>
        <section id="about" className=''>
          <div className="container pt-16">
            <div className="section-header">
              <h2 className="fs-1 uppercase">About us</h2>
            </div>

            <div className="col-2-grid2">
              <img src="/images/image1.jpeg" alt="about us" />
              <div className="content">
                <h3 className="fs-3">
                  Our success secret
                </h3>
                <p className='mb-6'>
                Visit our barber for personalized grooming that meets your needs. Our skilled barbers prioritize your satisfaction, ensuring excellent care and attention to detail.                 </p>
                <p className='mb-6'>
                Boost your style and confidence as we tailor our services to you. Relax in our welcoming atmosphere and leave with a refreshed look. Customer satisfaction is our top priority, and we exceed expectations. Experience the difference at our barber shop today.             </p>
                <a href="#services" className="btn">Services</a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About