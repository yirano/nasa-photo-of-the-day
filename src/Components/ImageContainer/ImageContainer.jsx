import React from 'react';
import ImageTitle from './ImageTitle';
import Image from './Image';
import ImageCaption from './ImageCaption';

export default function ImageContainer() {
	return (
		<div class="imageContainer">
			<ImageTitle />
			<Image />
			<ImageCaption />
		</div>
	);
}
