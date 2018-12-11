import React, { Component } from 'react';
import Gallery from './gallery';

import imagesArray from './gallery/thumbs-data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbs: [],
    };
  }

  componentDidMount() {
    this.setState({ thumbs: imagesArray });
  }

  render() {
    const { thumbs } = this.state;

    console.log(2, thumbs);

    return (
      <div>
        <Gallery images={thumbs} />
      </div>
    );
  }
}
