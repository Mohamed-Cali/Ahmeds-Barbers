import '../globals.css'
import './page.css'

const page = () => {
    return (

        <div className="container w-full mt-44">
            <div className="grids mb-5 p-4">

                <article className="card-h card-h--2v3 card-h--big-space">
                        <div className="w-full hidden lg:block">
                            <img src="/images/image6.jpeg" alt="woman" className='w-full'/>
                        </div>
                        <div className="w-full lg:hidden">
                            <img src="/images/image6.jpeg" alt="woman" className='w-full'/>
                        </div>

                    <div className="card-h__body">
                        <h2 className="card-h__title">ABOUT US</h2>

                        <p className="card-h__text">
                        Welcome to Beauty Point, the premier hair salon in town! Our salon was founded with a simple mission: to provide our clients with the highest quality haircuts, styling, and coloring services in a warm and welcoming environment. We believe that a great hairstyle has the power to boost confidence, improve self-esteem, and make people feel their very best. That's why we go above and beyond to ensure that each and every client who walks through our doors receives the personalized attention and care they deserve. Whether you're looking for a simple trim, a bold new look, or anything in between, we've got you covered.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default page;