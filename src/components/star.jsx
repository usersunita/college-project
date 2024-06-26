import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

export const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className='icons' style={{ color:'yellow' }}/>
        ) : stars >= number ? (
          <FaStarHalfAlt className='icons' style={{ color: 'yellow' }} />
        ) : (
          <AiOutlineStar className='icons' style={{ color: 'yellow' }} />
        )}
      </span>
    );
  });

  return (
    <>
      <div className='icon-style'>
        {ratingStar}
        <p style={{ marginTop: '0px' }}>({reviews} Client reviews)</p>
      </div>
    </>
  );
};

export default Star;
