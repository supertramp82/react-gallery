import React, { Component } from 'react';

class ActiveThumb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      moving: false,
    };

    this.onmousedown = this.onmousedown.bind(this);
    this.onmouseup = this.onmouseup.bind(this);
    this.onmousemove = this.onmousemove.bind(this);
  }

  onmousedown() {
    this.setState({ dragging: true, moving: false });
  }

  onmouseup() {
    this.setState({ dragging: false });
  }

  onmousemove() {
    if (this.state.dragging == true) {
      if (this.state.moving == false) {
        this.setState({ dragging: false, moving: true });
        this.props.onNext();
      }
    }
  }

  render() {
    const { activeThumb } = this.props;

    return (
      <div
        style={parentStyle}
        onMouseDown={this.onmousedown}
        onMouseUp={this.onmouseup}
        onMouseMove={this.onmousemove}
      >
        <img style={activeThumbStyle} src={activeThumb.imgURL} />
        <div style={topRightStyle}>{activeThumb.caption}</div>
      </div>
    );
  }
}

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
