import React from 'react';

const Thumb = ({ imgUrl, handleClick, index }) => {
  return (
    <div style={thumbStyle}>
      <img
        src={imgUrl}
        alt=""
        style={imgStyle}
        onClick={handleClick}
        data-index={index}
      />
    </div>
  );
};

const thumbStyle = {
  width: '10%',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const imgStyle = {
  width: '98%',
  height: '98%',
  position: 'relative',
};

export default Thumb;
