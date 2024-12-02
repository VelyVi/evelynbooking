import { useEffect } from 'react';
import { useParams } from 'react-router';
import useApiFetch from '../hooks/useApiFetch';
import { TfiWorld } from 'react-icons/tfi';
import Reservations from '../components/details/Reservations';
import RelatedHotels from '../components/details/RelatedHotels';
import Spinner from '../components/Spinner';
import Reviews from '../components/details/Reviews';
import Description from '../components/details/Description';
import Gallery from '../components/details/Gallery';
import Map from '../components/details/Map';
import Hero from '../components/details/Hero';

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
			<div className="">
				<Hero hotel={hotel} />
			</div>
			<div className="max-w-5xl mx-auto px-5 py-10">
				<div className="mb-4">
					<Reservations hotelId={hotel?.id} />
				</div>
				{/*Grid */}
				<div className="grid grid-cols-2 gap-5">
					<div className="col-span-2">
						<Description
							rating={hotel?.rating}
							address={hotel?.address}
							description={hotel?.description}
						/>
					</div>
					<div>
						<Gallery hotel={hotel} />
					</div>
					<div>
						<Map lat={hotel?.lat} lon={hotel?.lon} />
					</div>
				</div>
				<Reviews />
				<RelatedHotels />
			</div>
		</div>
	);
}

export { Details };
