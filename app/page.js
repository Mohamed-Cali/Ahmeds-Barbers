
import { Rubik } from 'next/font/google'
import './page.css'

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: '400'
})

export default function Home( ) {

  return (
    <div className={rubik.className}>
      <section class="section" id="home">
        <div class="container1 grid">
          <div class="image">
            <img
              src="/images/image1.jpeg"
              alt=""
            />
          </div>
          <div class="text">
            <h2 class="title">Your Go-To Specialist for Modern Haircuts and Beard Grooming</h2>
            <p>
            No matter your hair type or preferred style, we have the expertise, grooming products, and contemporary facilities to meet your grooming needs and bring your vision to life.
            </p>
            <a class="button1" href="/services">Our Services</a>
          </div>
        </div>
      </section>

      <div>

      <section className="mb-32 mt-20 lg:mt-0">
        <div className="container p-2">
            <h2 className="heading heading--header flex justify-center">LEARN MORE ABOUT US</h2>
            <div className="grids mb-5">
                <div className="bg bg--center"></div>

                <article className="card-h card-h--2v3 card-h--big-space">
                        <div className="w-full hidden lg:block">
                            <img src='/images/image2.jpeg' alt="woman" className='w-full'/>
                        </div>
                        <div className="w-full lg:hidden">
                            <img src='/images/image2.jpeg' alt="woman" className='w-full'/>
                        </div>

                    <div className="card-h__body">
                        <h2 className="card-h__title">Our success secret</h2>

                        <p className="card-h__text">
                        At our barber shop, we believe that every person deserves to look and feel their best. That's why we've developed a range of grooming services that cater to the unique needs and preferences of each customer. Our skilled team of barbers is dedicated to delivering exceptional care and attention to detail, so you can be sure you'll receive the highest quality service. Whether you're looking for a classic cut or a modern style, we've got you covered. Come visit us and experience the secret to our success: our commitment to your satisfaction.
                        </p>
                    </div>
                </article>

                <article className="card-h card-h--3v2 card-h--big-space card-h--rev">
                    <div className="card-h__header">
                        <div className="image">
                            <img src="/images/image3.jpeg" alt="" className="card-h__img sepia__img"/>
                        </div>
                    </div>
                    <div className="card-h__body">
                        <h2 className="card-h__title">How We Keep Our Clients Looking Sharp</h2>

                        <p className="card-h__text">
                        At our barber shop, our top priority is to provide outstanding grooming services to our valued clients. We use top-of-the-line grooming products and the latest techniques to ensure that your hair not only looks fantastic but also feels healthy and nourished. Our barbers are well-trained to listen attentively to your requirements and work together with you to achieve your desired hairstyle. You can depend on us to give you a polished look that complements your personal style. Come in and discover how we do it - the secret to delivering exceptional hair transformations that leave our clients looking and feeling their best.
                        </p>

                    </div>
                </article>
            </div>

            <div className="mt-24 mb-24 flex justify-center">
                <a href='/services' className="button1">Our Services</a>
            </div>
        </div>
    </section>
     </div>    
    </div>

  )
}
