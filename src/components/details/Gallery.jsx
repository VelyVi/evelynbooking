function Gallery({ hotel }) {
	const images = hotel?.images && hotel.images[0].url;

	return (
		<div className="aspect-square rounded-lg overflow-hidden">
			<img
				src={images}
				alt={hotel?.name}
				className="w-full h-full object-cover"
			/>
		</div>
	);
}

export default Gallery;
