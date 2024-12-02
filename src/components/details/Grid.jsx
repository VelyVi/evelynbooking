import React from 'react';
import Description from './Description';
import Gallery from './Gallery';
import Map from './Map';

function Grid({ rating, address, description, images, lat, lon }) {
	return (
		<div className="grid grid-cols-2">
			<div className="col-span-2">
				<Description
					rating={rating}
					address={address}
					description={description}
				/>
			</div>
			<div>
				<Gallery images={images} />
			</div>
			<div>
				<Map lat={lat} lon={lon} />
			</div>
		</div>
	);
}

export default Grid;
