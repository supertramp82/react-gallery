import React from 'react';
import Thumb from './thumb';

const ThumbsGrid = ({ thumbs, handleClick }) => {
  return (
    <div style={thumbGridStyle}>
      {thumbs.map((thumb, i) => {
        return (
          <Thumb
            key={thumb.thumbURL}
            imgUrl={thumb.thumbURL}
            handleClick={handleClick}
            index={i}
          />
        );
      })}
    </div>
  );
};

const thumbGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

export default ThumbsGrid;
