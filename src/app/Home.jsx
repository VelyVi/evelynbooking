import { useEffect, useState } from 'react';
import { useHotels } from './context/hotels.jsx';
import HotelsList from '../components/home/HotelsList.jsx';
import Search from '../components/home/Search.jsx';

function Home() {
	const { hotels, getAll } = useHotels();
	const [result, setResult] = useState('');

	useEffect(() => {
		if (hotels.length === 0) {
			getAll();
		}
	}, []);

	const filtered = hotels?.filter((hotel) =>
		hotel?.name.toLowerCase().includes(result),
	);

	return (
		<div>
			<section className="max-w-5xl mx-auto px-5 py-10">
				<div className="mb-8">
					<Search setResult={setResult} />
				</div>
				<HotelsList hotels={filtered} />
			</section>
		</div>
	);
}

export { Home };
