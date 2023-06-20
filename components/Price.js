import React from 'react';
import './PricePage.css';

const PricePage = () => {
  return (
    <div id='pricing' className="price-page pt-28 mb-20">
      <h1 className="price-page__title mb-10 fs-1 uppercase">Pricing</h1>
      <div className="price-page__services">
        <div className="price-page__service pt-12 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Haircut</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12 lg:rounded-tr-xl">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Hair Colouring</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Haircut</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Hair Colouring</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Haircut</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Hair Colouring</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Haircut</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Hair Colouring</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12 lg:rounded-bl-xl">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Haircut</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
        <div className="price-page__service pt-12 rounded-br-xl rounded-bl-xl lg:rounded-bl-none">
          <div className="price-page__service-info">
            <h2 className="price-page__service-title">Hair Colouring</h2>
            <hr className="price-page__service-divider" />
            <p className="price-page__service-price">£20</p>
          </div>
        </div>
      </div>
        
    </div>
  );
};

export default PricePage;
