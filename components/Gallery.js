'use client'      

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Gallery.css"

let img = [
  {
  id: 1,
  src: "/images/image11.jpeg",
  },
  {
  id: 2,
  src: "/images/image6.jpeg",
  },
  {
  id: 3,
  src: "/images/image10.jpeg",
  },
  {
  id: 4,
  src: "/images/image4.jpeg",
  },
  {
  id: 5,
  src: "/images/image17.jpeg",
  },
  {
  id: 6,
  src: "/images/image13.jpeg",
  },
  {
  id: 7,
  src: "/images/image14.jpeg",
  },
  {
  id: 8,
  src: "/images/image15.jpeg",
  },
  {
  id: 9,
  src: "/images/image18.jpeg",
  },
  {
  id: 10,
  src: "/images/image19.jpeg",
  },
  {
  id: 11,
  src: "/images/image20.jpeg",
  },
];

var $ = require("jquery");
    if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        navText: [
            "<span>&#x21e6;</span>",
            "<span>&#x21e8;</span>",
        ],
        responsive: {
        0: {
        items: 1,
        },
        400: {
        items: 1,
        },
        600: {
        items: 2,
        },
        900: {
        items: 3,
        },
        },
    };

return (
<div id="" className="row no-gutters mt-24 pl-2 pr-2 md:pl-10 md:pr-12">
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2" id="">
    <h3 className="text-center uppercase text-3xl">Gallery</h3>
    <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
      <OwlCarousel
        className="owl-theme black-text h-full"
        dots={false}
        animateIn={false}
        {...options}
      >
        {img && img.length > 0 ? (
          img.map((img) => {
            return (
              <div id="featuredProducts" className="item item-con float-left mb-6 w-full h-28 mt-6" key={img.id}>
                <div className="productListing w-full h-full self-center col-lg-5th col-md-4 col-sm-6 col-xs-12">
                    <a className="product w-full h-full float-left">
                      <span className="image w-full text-center">
                        <img id={"img" + img.id} src={img.src} className='h-96 w-full pr-4 pl-4 sm:pr-0 sm:pl-0'/>
                      </span>
                    </a>
                </div>
              </div>
            );
          })
        ) : (
          ""
        )}
      </OwlCarousel>
    </ul>
  </div>
</div>

)};
export default Slider;
        

        
