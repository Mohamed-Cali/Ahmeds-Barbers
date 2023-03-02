import '../globals.css'

const page = () => {
    return (
        <div className='px-[15px] min-h-screen lg:px-0 mx-auto container pt-20 mt-24 mb-24' >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center'>
                <div data-aos='fade-up' data-aos-duration='1500'>
                    <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>About Us</h1>
                    <p className='text-lg text-theme-body mb-5 lg:mr-[100px]'>Welcome to Berni's Cutz, the premier hair salon in town! Our salon was founded with a simple mission: to provide our clients with the highest quality haircuts, styling, and coloring services in a warm and welcoming environment. We believe that a great hairstyle has the power to boost confidence, improve self-esteem, and make people feel their very best. That's why we go above and beyond to ensure that each and every client who walks through our doors receives the personalized attention and care they deserve. Whether you're looking for a simple trim, a bold new look, or anything in between, we've got you covered.</p>
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
              At Berni's Cutz, we're proud to employ a team of highly trained and experienced hair stylists who are passionate about their craft. Our stylists stay up-to-date with the latest trends and techniques in hair cutting, coloring, and styling to ensure that our clients always leave our salon looking and feeling their very best. <br /><br /> We use only the best quality hair care products to ensure that your hair stays healthy and beautiful between visits. We also offer a range of additional services, including blowouts, hair extensions, and updos for special occasions. Come visit us today and experience the Berni's Cutz difference!
            </p>
          </article>
          </div>
        </div>
        </div>
    );
};

export default page;