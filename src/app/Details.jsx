import { useEffect } from 'react';
import { useParams } from 'react-router';
import useApiFetch from '../hooks/useApiFetch';
import Reservation from '../components/details/Reservation';
import RelatedHotels from '../components/details/RelatedHotels';
import Spinner from '../components/Spinner';
import Reviews from '../components/details/Reviews';
import Description from '../components/details/Description';
import Gallery from '../components/details/Gallery';
import Map from '../components/details/Map';
import Hero from '../components/details/Hero';
import { useAuth } from './context/auth';
import { MdLockOutline } from 'react-icons/md';

function Details() {
	const params = useParams();
	const { isAuth } = useAuth();
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
				<h2 className="text-2xl font-semibold text-center mb-4">Reserve</h2>
				<div className="mb-8">
					{isAuth ? (
						<>
							<Reservation hotelId={hotel?.id} />
						</>
					) : (
						<>
							<p className="flex items-center justify-center gap-1">
								<MdLockOutline className="size-5" />
								<span className="text-sm">
									Please, login to make a reservation.
								</span>
							</p>
						</>
					)}
				</div>
				{/*Grid */}
				<div className="grid grid-cols-2 gap-5 mb-8">
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

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<Reviews hotelId={hotel?.id} />
					</div>

					<div className="h-full">
						<div className="sticky top-20">
							<RelatedHotels cityId={hotel?.cityId} hotelId={hotel?.id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Details };
