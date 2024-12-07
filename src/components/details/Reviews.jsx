import { useEffect } from 'react';
import useApiFetch from '../../hooks/useApiFetch';
import ReviewsList from './ReviewsList';

function Reviews({ hotelId }) {
	const [reviews, setReviews] = useApiFetch();

	useEffect(() => {
		if (hotelId) {
			setReviews({
				url: `/reviews?hotelId=${hotelId}`,
			});
		}
	}, [hotelId]);

	return (
		<div>
			<h3 className="text-2xl font-semibold text-center mb-4">Reviews</h3>
			<div>
				<ReviewsList reviews={reviews?.results} />
			</div>
		</div>
	);
}

export default Reviews;
