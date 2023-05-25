'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.css';



  let reviews = [
    {
      id: 1,
      name: 'Ellen Corkerry',
      rating: 5,
      review: 'Took my 6 year old grandson there today for a complete change of hairstyle. I showed him a picture of what we wanted - he did it absolutely spot on. Delighted with what he did. Will definitely be using him again.',
    },
    {
      id: 2,
      name: 'Ayaan Qureshi',
      rating: 5,
      review: "Probably one of the best haircuts I have ever recieved! Great professionalism, friendly and approachable staff that are open minded and skilled at their craft. Definitely a community spot. Prices seem a bit extravagant at first but the product is worth every penny. Ahmed's Barbers outperformes all other barbers in the area hands down. Will definitely be returning! Aaron did a great job.",
    },
    {
      id: 3,
      name: 'Lucy Cleary',
      rating: 5,
      review: 'Excellent barber for my 13 year old son',
    },
    {
      id: 4,
      name: 'Suhila Tokhi',
      rating: 5,
      review: 'Good hair cuts and great service',
    },
    {
      id: 5,
      name: 'Stephen Humble',
      rating: 5,
      review: 'Very impressed with my local barber Ahmed and will definitely go back.',
    },
    {
      id: 6,
      name: 'slim shady',
      rating: 4,
      review: 'Amazing going again tommorow',
    },
    {
      id: 7,
      name: 'A A',
      rating: 5,
      review: 'Very professional highly recommended',
    },
  ];
  
  const Reviews = () => {
    const [expanded, setExpanded] = useState(Array(reviews.length).fill(false));
    const [currentIndex, setCurrentIndex] = useState(-1);
  
    const toggleExpand = (index) => {
      const updatedExpanded = [...expanded];
      updatedExpanded[index] = !updatedExpanded[index];
      setExpanded(updatedExpanded);
  
      setCurrentIndex(index);
    };
  
    const renderStarRating = (rating) => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className="star"></span>);
      }
      return stars;
    };
  
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
  
    return (
      <section id="reviews" className="pt-16">
        <div className="container">
          <div className="section-header mt-16">
            <h2 className="fs-1 uppercase">Reviews</h2>
          </div>
          <Slider className="" {...settings}>
            {reviews.map((review, index) => (
              <div className="review" key={review.id}>
                <div className="person">
                  <h4 className="review-name">{review.name}</h4>
                  <div className="star-rating">
                    {renderStarRating(review.rating)}
                  </div>
                </div>
                <p
                  className={`${
                    index === currentIndex && expanded[currentIndex]
                      ? 'expanded'
                      : 'review-text'
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  {review.review}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  };
  
  export default Reviews;