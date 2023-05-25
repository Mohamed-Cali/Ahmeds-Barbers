import React from 'react'
import PricePage from './Price'

function Services() {
  return (
    <div>
        <section id="services" className='pt-0'>
          <div className="container pt-28">
            <div className="section-header">
              <h2 className="fs-1 uppercase mb-12">Our Services</h2>
              <p>
              At our salon, our skilled stylists are committed to ensuring that you depart feeling rejuvenated and self-assured. Check out our list of services and schedule your appointment today.
              </p>
            </div>
            <div className="col-3-grid3 mt-20">
              <div className="course card hover-effect">
                <img src="/images/image2.jpeg" alt="" />
                <div className="course-info flex justify-center">
                  <h3 className="">Haircut & styling</h3>
                </div>
              </div>
              <div className="course card hover-effect">
                <img src="/images/image4.jpeg" alt="" />
                <div className="course-info flex justify-center">
                  <h3 className="">Beard Trim</h3>
                </div>
              </div>
              <div className="course card hover-effect">
                <img src="/images/image8.jpeg" alt="" />
                <div className="course-info flex justify-center">
                  <h3 className="">Kid's Haircut</h3>
                </div>
              </div>
              
            </div>
            <PricePage />
          </div>
        </section>
    </div>
  )
}

export default Services