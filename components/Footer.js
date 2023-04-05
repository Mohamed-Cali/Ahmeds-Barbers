

const Footer = () => {
  return (

    <footer className='bg-black text-white pt-10 p-8'>
      <div className='max-w-[1200px] gap-10 mx-auto grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-3 pb-4'>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start uppercase'>Twicks Barbers</h4>
          <p className='text-xs lg:text-sm text-center lg:text-start'>Elevate your appearance through our<br/> exceptional styling services</p>
          
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Contact</h4>
          <address className='text-sm font-light'>162 Heath Rd, Twickenham, TW1 4BN</address>
          <p className='flex flex-col text-center lg:text-start'>
            <span className='text-light text-xs lg:text-sm'>020 8538 9386</span>
          </p>
        </section>
        <section className='space-y-4'>
          <h4 className='font-bold text-lg text-center lg:text-start'>Opening Hours</h4>
          <p className='grid grid-cols-2 m-0'>
            <span className='text-xs lg:text-sm'>Monday - Friday</span>
            <span className='text-xs lg:text-sm text-end'>9am - 6.30pm</span>
          </p>
          <p className='grid grid-cols-2 m-0'>
            <span className='text-xs lg:text-sm'>Saturday</span>
            <span className='text-xs lg:text-sm text-end'>9am - 6.00pm</span>
          </p>
          <p className='grid grid-cols-2 m-0'>
            <span className='text-xs lg:text-sm'>Sunday</span>
            <span className='text-xs lg:text-sm text-end'>9am - 5.00pm</span>
          </p>
        </section>
      </div>
      <div className='border-t pt-2 pb-2'>
      <p className='text-center text-gray-300 text-xs md:text-sm lg:text-base'>&copy; TwicksBarbers {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;