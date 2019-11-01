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
  return images.map(url => {
    return (
      <Link to="/listings/1">
        <img src={url} alt={url} />
      </Link>
    );
  });
};

function ContentCards({ apartments }) {
  return (
    <CenteredColumns>
      {apartments.map((apartment, index) => (
        <div
          className="column is-half-tablet is-one-quarter-desktop"
          key={index}
        >
          <a className="ContentCards__card card is-flex" href={apartment.url}>
            <div className="card-image">
              <Slider {...settings}>{renderImages(apartment.images)}</Slider>
            </div>
            <div className="card-content">
              <div className="content">
                <span class="tag is-primary">
                  {apartment.owner.skillset[0]}
                </span>
                <h4>{apartment.title}</h4>
                <p>{apartment.description}</p>
                <span
                  className="has-text-weight-medium"
                  style={{ marginRight: '10px' }}
                >
                  ${apartment.price}/hr
                </span>
                <i class="fa fa-bed" aria-hidden="true" />{' '}
                <span style={{ marginRight: '10px' }}>
                  {apartment.bedrooms}
                </span>
                <i class="fa fa-bath" aria-hidden="true" />{' '}
                <span style={{ marginRight: '10px' }}>
                  {apartment.bedrooms}
                </span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </CenteredColumns>
  );
}

export default ContentCards;
