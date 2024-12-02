import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import RatingStars from '../RatingStars';

function Description({ rating, address, description }) {
	return (
		<div>
			<div>
				<RatingStars rating={rating} />
			</div>
			<p className="flex items-center gap-1 mb-4">
				<IoLocationOutline /> <span className="text-xs">{address}</span>
			</p>
			<p>{description}</p>
		</div>
	);
}

export default Description;
