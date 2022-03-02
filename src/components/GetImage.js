import React, { Component } from 'react';
import Image from './Image';
class GetImage extends Component {
  render() {
    return (
      <div className='img-container'>
        {this.props.imgArr.map((img) => (
          <Image key={img.id} img={img} />
        ))}
      </div>
    );
  }
}

export default GetImage;
