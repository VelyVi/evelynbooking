import HotelCard from './HotelCard';

function HotelsList({ hotels }) {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5">
			{hotels?.map((hotel) => (
				<HotelCard key={hotel.id} hotel={hotel} />
			))}
		</div>
	);
}

export default HotelsList;
