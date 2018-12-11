import React from 'react';

const Thumb = () => {
  return <div style={thumbStyle}>Thumbnail</div>;
};

const thumbStyle = {
  width: '10%',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

export default Thumb;
