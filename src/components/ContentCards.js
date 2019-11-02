import React from 'react';
import CenteredColumns from './CenteredColumns';
import Slider from 'react-slick';
import './ContentCards.scss';
import { Link, useRouter } from './../util/router.js';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const renderImages = images => {
  return images.map((url, index) => {
    return (
      <Link to="/listings/1" key={`apartment-image-${index}`}>
        <img src={url} alt={url} />
      </Link>
    );
  });
};

function ContentCards({ apartments }) {
  return (
    <CenteredColumns>
      {apartments.map((apartment, index) => (
        <div className="column is-full" key={index}>
          <div className="ContentCards__card card is-flex">
            <div className="card-content">
              <div className="columns">
                <div className="column is-three-fifths">
                  <div className="content">
                    <h4>{apartment.title}</h4>
                    <p>{apartment.description}</p>
                    <span
                      className="has-text-weight-heavy"
                      style={{ marginRight: '10px' }}
                    >
                      ${apartment.price}/hr
                    </span>
                    <span style={{ marginRight: '10px' }}>
                      {apartment.bedrooms} Bedrooms
                    </span>
                    <span style={{ marginRight: '10px' }}>
                      {apartment.bathrooms} Bathrooms
                    </span>
                    <span class="tag is-primary">
                      {apartment.owner.skillset[0]}
                    </span>
                  </div>
                </div>
                <div className="column is-two-fifths">
                  <div className="card-image">
                    <Slider {...settings}>
                      {renderImages(apartment.images)}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default ContentCards;