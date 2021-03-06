import React, { Component } from 'react';
import ActiveThumb from './active-thumb';
import ThumbsGrid from './thumbs-grid';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.renderThumb = this.renderThumb.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onNext() {
    const { images } = this.props;

    if (this.state.activeIndex == images.length - 1)
      this.setState({ activeIndex: 0 });
    else
      this.setState({ activeIndex: +this.state.activeIndex + 1 });
  }

  renderThumb() {
    const { images, index } = this.props;

    if (images.length) {
      return (
        <ActiveThumb
          activeThumb={images[this.state.activeIndex]}
          onNext={this.onNext}
        />
      );
    }
  }

  handleClick(e) {
    const activeIndex = e.target.getAttribute('data-index');
    this.setState({ activeIndex: activeIndex });
  }

  render() {
    const { images, index } = this.props;

    return (
      <div style={galleryStyle}>
        Gallery
        <div style={imageStyle}>
          <div style={activeThumbStyle}>{this.renderThumb()}</div>
        </div>
        <div style={thumbStyle}>
          <ThumbsGrid
            thumbs={images}
            handleClick={this.handleClick}
          />
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
  position: 'relative',
};

const activeThumbStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
};

const thumbStyle = {
  // background: 'orange',
  height: '30vh',
  width: '100vw',
};
