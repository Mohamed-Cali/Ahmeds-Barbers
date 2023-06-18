import './Hero.css'

function Hero() {
    const phoneNumber = '07565400486';

  return (
    <div>
         <section className="intro">
          <div className="intro__top"></div>
          <div className="intro__panel">
              <div className="intro__picture">

                  <div className="sepia--title">
                      <img className="sepia__img" src="/images/image1.WebP" alt='hero'/>
                  </div>
              </div>

              
              <h1 className="intro__title">NATS <br/> BARBERS</h1>

              <span className="intro__subtitle">Styling, Barbering, <br />and Personal Care</span>

              <div className='flex flex-row h-full mt-10 sm:flex-col items-center justify-center space-y-5'>
            <a href={`tel:${phoneNumber}`} className='button1 self-start sm:self-center lg:mt-30 bg-none p-2 rounded-md animate-bounce duration-300'>
              <div className='flex flex-col w-full'>
                <span className='pr-4 pl-4'>CALL US</span>
              </div>
            </a>
          </div>
          </div>
      </section>
    </div>
  )
}

export default Hero