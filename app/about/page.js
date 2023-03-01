import '../globals.css'

const page = () => {
    return (
        <div className='px-[15px] min-h-screen lg:px-0 mx-auto container pt-20 mt-24 mb-24' >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center'>
                <div data-aos='fade-up' data-aos-duration='1500'>
                    <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>About Us</h1>
                    <p className='text-lg text-theme-body mb-5 lg:mr-[100px]'>Hair Box is one of the best premium Men salon. Here we provide the best ever services. We believe in 100% customer satisfaction. Hairbox’s services run the gamut from- Hair Cut, Hair Color, Hair Treatment, Facial, Manicure, Pedicure, Body Scrub, Body Massage, and Steam Bath</p>
                    <p className='text-lg text-theme-body mb-5 lg:mr-[100px]'>Hairbox is more than just your regular makeover salon. All time we ensure that we take on board reliable beauty professionals so that our clients get best services. Hairbox team tries to make sure that you look your best anywhere, anytime, always</p>
                </div>
                <div className='flex justify-center' data-aos='fade-up' data-aos-duration='1500'>
                    <img src='/images/image4.jpeg' alt="" className='h-[400px] w-auto self-center object-fil' />
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto mt-20'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div className='flex justify-center' data-aos='fade-up' data-aos-duration='1500'>
            <img src='/images/image6.jpeg' alt="a beautiful woman" className='h-[400px] w-auto object-fil self-center'/>
          </div>
          <article className="space-y-4">
            <p>
              Welcome to Curly Hair Salon, where we specialize in helping our clients look and feel their best. 
            Our team of skilled stylists are dedicated to providing top-quality services in a warm and welcoming atmosphere.
            </p>
            <p>
              We offer a wide range of services, including haircuts, styling, coloring, and more. 
            Whether you want to update your look with a new haircut or change up your hair color, 
            we have the expertise and products to help you achieve your desired look.
            </p>
            <p>
              In addition to our styling services, we also offer a variety of hair care products to 
            help you maintain your new look at home. From shampoo and conditioner to styling products, 
            we have everything you need to keep your hair looking its best.
            </p>
            <p>
              Thank you for considering Curly Hair Salon for all of your hair care needs. We look forward to 
            working with you and helping you achieve your desired look. Please do not hesitate to contact 
            us with any questions or to schedule an appointment.
            </p>
          </article>
          </div>
        </div>

        </div>
    );
};

export default page;