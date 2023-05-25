import React from 'react';
import './Price.css';

const PricePage = () => {
  return (
    <div id='pricing' className="price-page pt-28 mb-20">
      <h1 className="price-page__title mb-10 fs-1 uppercase">Pricing</h1>
      <h2 className='p-4 text-2xl mt-10'>Men's</h2>
      <div className="price-page__services">
        <div className="price-page__service">
          <h2 className="price-page__service-title">Haircut</h2>
          <p className="price-page__service-price">$30</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Blowout</h2>
          <p className="price-page__service-price">$40</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Hair Coloring</h2>
          <p className="price-page__service-price">$80+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Highlights</h2>
          <p className="price-page__service-price">$90+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Updo</h2>
          <p className="price-page__service-price">$60</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Bridal Hair</h2>
          <p className="price-page__service-price">$100+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Makeup</h2>
          <p className="price-page__service-price">$50+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Makeup</h2>
          <p className="price-page__service-price">$50+</p>
        </div>
      </div>
        {/* /////// */}
        <h2 className='p-4 text-2xl mt-10'>Women's</h2>
      <div className="price-page__services">
        <div className="price-page__service">
          <h2 className="price-page__service-title">Haircut</h2>
          <p className="price-page__service-price">$30</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Blowout</h2>
          <p className="price-page__service-price">$40</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Hair Coloring</h2>
          <p className="price-page__service-price">$80+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Highlights</h2>
          <p className="price-page__service-price">$90+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Updo</h2>
          <p className="price-page__service-price">$60</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Bridal Hair</h2>
          <p className="price-page__service-price">$100+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Makeup</h2>
          <p className="price-page__service-price">$50+</p>
        </div>
        <div className="price-page__service">
          <h2 className="price-page__service-title">Makeup</h2>
          <p className="price-page__service-price">$50+</p>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
