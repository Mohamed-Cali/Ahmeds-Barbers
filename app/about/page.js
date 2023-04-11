import '../globals.css'
import './page.css'

const page = () => {
    return (

        <div className="container w-full mt-44">
            <div className="grids mb-5 p-4">

                <article className="card-h card-h--2v3 card-h--big-space">
                        <div className="w-full hidden lg:block">
                            <img src="/images/image16.jpeg" alt="woman" className='w-full rounded-md'/>
                        </div>
                        <div className="w-full lg:hidden">
                            <img src="/images/image16.jpeg" alt="woman" className='w-full rounded-md'/>
                        </div>

                    <div className="card-h__body">
                        <h2 className="card-h__title">ABOUT US</h2>

                        <p className="card-h__text">
                        Welcome to Ahmed's Barbers, the premier destination for men's grooming in town! Our barbershop was founded with a simple goal: to provide our clients with the best possible haircuts, shaves, and grooming services in a comfortable and friendly atmosphere. We understand that a great haircut is about more than just looking good - it's about feeling confident, powerful, and ready to take on the world. That's why we take pride in offering personalized attention and care to every client who walks through our doors. <br/><br/>Whether you're looking for a classic cut, a trendy new style, or a fresh shave, our team of experienced barbers will work with you to create the perfect look that suits your individual style and needs. So why wait? Book an appointment with Ahmed's Barbers today and experience the ultimate grooming experience that will leave you looking and feeling your very best.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default page;