import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {/* 1 */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 1
              ? 'fa-solid fa-star'
              : value >= 0.5
              ? 'fa-solid fa-star-half-alt'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 2 */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 2
              ? 'fa-solid fa-star'
              : value >= 1.5
              ? 'fa-solid fa-star-half-alt'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 3 */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 3
              ? 'fa-solid fa-star'
              : value >= 2.5
              ? 'fa-solid fa-star-half-alt'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 4 */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 4
              ? 'fa-solid fa-star'
              : value >= 3.5
              ? 'fa-solid fa-star-half-alt'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      {/* 5 */}
      <span>
        <i
          style={{ color }}
          className={
            value >= 5
              ? 'fa-solid fa-star'
              : value >= 4.5
              ? 'fa-solid fa-star-half-alt'
              : 'fa-regular fa-star'
          }
        ></i>
      </span>
      <span style={{ marginLeft: '10px', color: '#000' }}>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#FFDF00',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
