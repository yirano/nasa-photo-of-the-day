import React from 'react';

export default function ImageContainer(props) {
  const { image } = props;
  return (
    <div className="imageContainer">
      <img src={image.url} alt={image.desc} />
    </div>
  );
}
