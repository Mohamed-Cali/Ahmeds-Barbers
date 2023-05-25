'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reviews.css';



  let reviews = [
    {
      id: 1,
      name: 'Dawid Paralusz',
      rating: 5,
      review: 'Always a pleasure coming here. The staff are friendly, professional and always give me the best service. Highly recommended.',
    },
    {
      id: 2,
      name: 'Alicja Sekara',
      rating: 5,
      review: 'Perfect cut and color with Berni! I am delighted with my new hair - as always - and always leave the salon like a milion dollars:). The staff are very friendly and helpful. Very highly recommended.',
    },
    {
      id: 3,
      name: 'Brian Mulford',
      rating: 5,
      review: 'Excellent service, lovely staff. After all these years, Anya always does a perfect cut, thank you.',
    },
    {
      id: 4,
      name: 'Grace Kelly',
      rating: 5,
      review: 'Great service! Was very happy with my cut and colour, looked fab! Very attentive hairdresser and I got offered plenty of cups of tea :) Good price too! Will deffo go back!',
    },
    {
      id: 5,
      name: 'David Dalley',
      rating: 5,
      review: 'Have been a regular customer for a number of years very friendly staff & always a great haircut after lockdown 👍',
    },
    {
      id: 6,
      name: 'Sandra',
      rating: 4,
      review: 'Very friendly staff. Very clean and follow the government guidelines meticulously to make everything safe. Prices are reasonable too.',
    },
    {
      id: 7,
      name: 'Charlie Clarey',
      rating: 5,
      review: 'Great local hairdressers with good skilled staff. Would not get my haircut anywhere else!',
    },
    {
      id: 8,
      name: 'Elina Rangelova',
      rating: 4,
      review: 'The girls are fantastic. Welcoming atmosphere. Always happy with services and will be visiting again in near future!!',
    },
    {
      id: 9,
      name: 'Barbara A.',
      rating: 5,
      review: 'Both hairdressers (Ania and Bernis) are amazing.  They are always willing to give you advice and make sure the client is happy before leaving the hair salon.',
    },
    {
      id: 10,
      name: 'Caz CC',
      rating: 4,
      review: 'Berni is a lovely friendly hairdresser, who has been doing my hair for years now, and always does a lovely job of it.  She had quickly gained my trust in her, after a bad hairdressing experience elsewhere. Anya is also brilliant and does an amazing job with my hair these days.',
    },
    {
      id: 11,
      name: 'Nicola Powell',
      rating: 5,
      review: 'Such a great experience! So happy with my hair. I went from blonde to brown and couldn’t be happier with the result. All the team are so engaging and friendly. They really listened to what I wanted and have done such a great job! Highly recommend.',
    },
    {
      id: 8,
      name: 'Beverly Hetherington',
      rating: 5,
      review: "The best hairdressers I've been to"
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
      <section id="testimonial" className="pt-16">
        <div className="container">
          <div className="section-header mt-16">
            <h2 className="fs-1 uppercase">Testimonials</h2>
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