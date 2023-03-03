import '../globals.css'

const page = () => {
    return (
        <div className='px-[15px] min-h-screen lg:px-0 mx-auto container pt-20 mt-24 mb-24' >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center'>
                <div data-aos='fade-up' data-aos-duration='1500'>
                    <h1 className='text-[40px] lg:text-[40px] lg:max-w-fit font-bold leading-10 lg:leading-[50px] mb-5'>About Us</h1>
                    <p className='text-lg text-theme-body mb-5 lg:mr-[100px]'>Welcome to I Unisex, the leading hair salon in town! Our salon was established with a straightforward goal: to deliver top-notch haircuts, styling, and coloring services to our clients in a friendly and welcoming atmosphere. We strongly believe that a fantastic hairstyle can enhance confidence, uplift self-esteem, and make individuals feel their absolute best. That's why we strive to offer personalized attention and exceptional care to every customer who visits us. Whether you want a minor trim, a daring transformation, or anything in the middle, we are here to cater to your needs.</p>
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
            I Unisex boasts a team of skilled and passionate hair stylists who stay current with the latest hair trends and techniques. Our salon uses only top-quality hair care products to maintain hair health and beauty. We also offer supplementary services such as blowouts, hair extensions, and updos for special occasions. Come experience the difference at I Unisex today!
            </p>
          </article>
          </div>
        </div>
        </div>
    );
};

export default page;