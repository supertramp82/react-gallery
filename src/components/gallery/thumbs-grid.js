import React from 'react';
import Thumb from './thumb';

const ThumbsGrid = () => {
  return (
    <div style={thumbGridStyle}>
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
    </div>
  );
};

const thumbGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

export default ThumbsGrid;
