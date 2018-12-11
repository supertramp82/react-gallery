import React from 'react';

const ActiveThumb = ({ activeThumb }) => {
  return (
    <div style={parentStyle}>
      <img style={activeThumbStyle} src={activeThumb.imgURL} />
      <div style={topRightStyle}>{activeThumb.caption}</div>
    </div>
  );
};

const activeThumbStyle = {};

const topRightStyle = {
  position: 'absolute',
  bottom: '20px',
  width: '100%',
  color: 'white',
};

const parentStyle = {
  position: 'relative',
  width: '100%',
};
export default ActiveThumb;
