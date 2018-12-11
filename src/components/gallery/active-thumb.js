import React from 'react';

const ActiveThumb = ({ activeThumb }) => {
  return (
    <div>
      <img style={activeThumbStyle} src={activeThumb.imgURL} />
    </div>
  );
};

const activeThumbStyle = {};

export default ActiveThumb;
