function Map({ lat, lon }) {
	const zoom = 15;
	return (
		<div className="aspect-square w-full rounded-lg overflow-hidden">
			<iframe
				src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				className="w-full h-full"
			></iframe>
		</div>
	);
}

export default Map;
