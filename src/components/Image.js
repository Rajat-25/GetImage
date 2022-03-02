import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0,
    };

    this.imgRef = React.createRef();
  }
  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setHeight);
  }

  setHeight = () => {
    const height = this.imgRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({
      spans: span,
    });
  };
  render() {
    const { description, urls } = this.props.img;
    return (
      <img
        ref={this.imgRef}
        src={urls.regular}
        alt={description}
        className='img-item'
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      />
    );
  }
}

export default Image;
