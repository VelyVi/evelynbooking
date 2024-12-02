import { useEffect } from 'react';
import { useParams } from 'react-router';
import useApiFetch from '../hooks/useApiFetch';
import Hero from '../components/details/Hero';
import Reservations from '../components/details/Reservations';
import Grid from '../components/details/Grid';
import RelatedHotels from '../components/details/RelatedHotels';
import Spinner from '../components/Spinner';
import Reviews from '../components/details/Reviews';

function Details() {
	const params = useParams();
	const [hotel, getHotel, loading] = useApiFetch();

	useEffect(() => {
		getHotel({
			url: `/hotels/${params.id}`,
		});
	}, [params.id]);

	if (loading)
		return (
			<div className="grid place-content-center min-h-[100dvh]">
				<Spinner className="w-14 h-14 text-gray-300 fill-blue-400 animate-spin" />
			</div>
		);

	return (
		<div>
			<Hero hotel={hotel} />
			<Reservations hotelId={hotel?.id} />
			<Grid
				rating={hotel?.rating}
				address={hotel?.address}
				description={hotel?.description}
				images={hotel?.images}
				lat={hotel?.lat}
				lon={hotel?.lon}
			/>
			<Reviews />
			<RelatedHotels />

			<pre>{JSON.stringify(hotel, null, 2)}</pre>
		</div>
	);
}

export { Details };
