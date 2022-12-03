import React from 'react';
import { Link } from 'react-router-dom';

const StadiumCard = ({ data }) => {
  return (
    <div className="stadium-card">
      <div
        className="stadium-card__wrapper"
        style={{
          backgroundImage: `url(${data.imageUrl}), linear-gradient(to right, #e4e4e4, #f8f8f8)`,
        }}
      >
        <Link
          className="stadium-card__link"
          to={{
            pathname: `/stadium/${data.id}`,
            state: { stadiumID: data.id },
          }}
        >
          <div className="stadium-card__content">
            <h2 className="stadium-card__title">{data.name}</h2>
            <div className="stadium-card__prices">
              <span className="stadium-card__price-l">
                NT${data.normalDayPrice} <span className="stadium-card__price-s">weekday</span>
              </span>
              <span className="stadium-card__price-s stadium-card__price-s--gray">
                NT${data.holidayPrice} weekend
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StadiumCard;
