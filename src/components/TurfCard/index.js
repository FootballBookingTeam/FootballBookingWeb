import React from 'react';
import { Link } from 'react-router-dom';

const TurfCard = ({ data }) => {
  console.log(data)
  return (
    <div className="turf-card">
      <div
        className="turf-card__wrapper"
        style={{
          backgroundImage: `url("https://blog.yousport.vn/wp-content/uploads/2018/09/san-bong-bach-viet-2.jpg"), linear-gradient(to right, #e4e4e4, #f8f8f8)`,
        }}
      >
        <Link
          className="turf-card__link"
          to={{
            pathname: `/turf/${data.id}`,
            state: { turfID: data.id },
          }}
        >
          <div className="turf-card__content">
            <h2 className="turf-card__title">{data.name}</h2>
            <div className="turf-card__prices">
                Giá: {data.price} VNĐ/1h
              <div className="turf-card__price-s--gray">
                Loại sân: {data.type}
              </div>
              <div className=" turf-card__price-s--gray">
                Rating: {data.rating} ⭐
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TurfCard;
