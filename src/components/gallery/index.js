import React, { Component } from 'react';
import ActiveThumb from './active-thumb';
import ThumbsGrid from './thumbs-grid';

export default class Gallery extends Component {
  render() {
    return (
      <div style={galleryStyle}>
        Gallery
        <div style={imageStyle}>
          <ActiveThumb />
        </div>
        <div style={thumbStyle}>
          <ThumbsGrid />
        </div>
      </div>
    );
  }
}

const galleryStyle = {
  background: '#ddd',
  height: '100vh',
  width: '100vw',
};

const imageStyle = {
  background: 'orangered',
  height: '70vh',
  width: '100vw',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
};

const thumbStyle = {
  background: 'orange',
  height: '30vh',
  width: '100vw',
};
