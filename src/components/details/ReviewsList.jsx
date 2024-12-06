import { useState } from 'react';
import ReviewCard from './ReviewCard';

function ReviewsList({ reviews }) {
	const [visibleReviews, setVisibleReviews] = useState(5);
	const loadMoreIncrement = 5;

	const loadMore = () => {
		setVisibleReviews(visibleReviews + loadMoreIncrement);
	};

	return (
		<div>
			<div className="mb-4">
				{reviews?.slice(0, visibleReviews).map((review) => (
					<ReviewCard key={review?.id} review={review} />
				))}
			</div>
			{visibleReviews < reviews?.length && (
				<div>
					<button className="btn" onClick={loadMore}>
						Load more
					</button>
				</div>
			)}

			{reviews?.length === 0 && (
				<p className="font-semibold text-center">No reviews yet.</p>
			)}
		</div>
	);
}

export default ReviewsList;
