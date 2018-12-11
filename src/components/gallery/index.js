import React, { Component } from 'react';
import ActiveThumb from './active-thumb';
import ThumbsGrid from './thumbs-grid';

export default class Gallery extends Component {
  renderThumb() {
    const { images } = this.props;

    if (images.length) {
      return <ActiveThumb activeThumb={images[0]} />;
    }
  }

  render() {
    return (
      <div style={galleryStyle}>
        Gallery
        <div style={imageStyle}>
          <div style={{ activeThumbStyle }}>
            {this.renderThumb()}
          </div>
        </div>
        <div style={thumbStyle}>
          <ThumbsGrid />
        </div>
      </div>
    );
  }
}

const galleryStyle = {
  // background: '#eee',
  height: '100vh',
  width: '100vw',
  textAlign: 'center',
  fontFamily: 'Verdana',
  fontSize: '24px',
  color: 'orangered',
};

const imageStyle = {
  // background: 'orangered',
  height: '70vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
};

const activeThumbStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
};

const thumbStyle = {
  background: 'orange',
  height: '30vh',
  width: '100vw',
};
