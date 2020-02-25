import React from 'react';
import Image from './Image';

export default function ImageContainer(props) {
  const { image } = props;
	return (
		<div className="imageContainer">
      <img src={image.src} alt={image.desc}/>
		</div>
	);
}
