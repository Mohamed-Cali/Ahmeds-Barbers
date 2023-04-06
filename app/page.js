import Image from 'next/image'
import { Rubik } from 'next/font/google'
import {GoPrimitiveDot} from "react-icons/go";
import {AiOutlineArrowDown, AiFillPhone} from "react-icons/ai"
import Link from 'next/link';
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
            <a class="button" href="/services">Our Services</a>
          </div>
        </div>
      </section>

      <div>

      <section className="mb-24 mt-20 lg:mt-0">
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
                <a href='/services' className="button">Our Services</a>
            </div>
        </div>
    </section>

        {/* <section className='features gap-14 mt-6 mb-24'>
          
          <div className="feature-flex">
            <h3 className="uppercase font-bold text-xl">Our success secret</h3>
            <p className="text-center max-w-[600px] mx-auto">
            We hold the belief that each individual deserves to possess luscious and healthy hair, which is why we've created a variety of hair care services that cater to the distinct requirements and preferences of every client. Our proficient team of stylists are committed to providing top-notch care and attention, ensuring that you receive the finest quality service.
            </p>
          </div>
          <div className="w-full self-center md:max-w-4xl">
            <img src='/images/image2.jpeg' alt="woman" className='w-full md:max-w-4xl'/>
          </div>
          <div className="feature-flex-2">
            <h3 className="uppercase font-bold text-xl">How we do it</h3>
            <p className="text-center max-w-[600px] mx-auto">
            At our salon, our primary focus is on delivering exceptional hair care services to our clients. We utilize premium products and cutting-edge techniques to ensure that your hair not only looks but also feels its absolute best. Our stylists are trained to actively listen to your needs and preferences, collaborating with you to achieve the exact look you desire. You can rely on us to provide you with a flawless hair transformation.
            </p>
          </div>
          <div className="w-full self-center md:max-w-4xl">
            <img src='/images/image3.jpeg' alt="hair" className="w-full md:max-w-4xl" />
          </div>
      </section>   */}
     </div>    
    </div>

  )
}
