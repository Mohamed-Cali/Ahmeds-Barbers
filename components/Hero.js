import './Hero.css'

function Hero() {
  const phoneNumber = '07565400486';

  return (
    <div>
        <section class="section3" id="home">
            <div class="container5 grid">
            <div class="image1">
                <img
                className=''
                src="/images/image1.jpeg"
                alt=""
                />
            </div>
            <div class="text">
                <h2 class="title">Your Go-To Specialist for Modern Haircuts and Beard Grooming</h2>
                <p>
                No matter your hair type or preferred style, we have the expertise, grooming products, and contemporary facilities to meet your grooming needs and bring your vision to life.
                </p>
                <a class="button1" href={`tel:${phoneNumber}`}>CALL US</a>
            </div>
            </div>
        </section>  
    </div>
  )
}

export default Hero