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
  width: '12vh',
  height: '9vh',
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
