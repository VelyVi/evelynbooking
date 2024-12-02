import { useEffect } from 'react';
import { useHotels } from './context/hotels.jsx';
import HotelsList from '../components/home/HotelsList.jsx';

function Home() {
	const { hotels, getAll } = useHotels();

	useEffect(() => {
		if (hotels.length === 0) {
			getAll();
		}
	}, []);

	return (
		<div>
			<section className="max-w-5xl mx-auto px-5 py-10">
				<HotelsList hotels={hotels} />
			</section>
		</div>
	);
}

export { Home };
