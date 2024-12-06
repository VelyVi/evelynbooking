import RatingStars from '../RatingStars';

function ReviewCard({ review }) {
	return (
		<div className="border-b py-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="font-semibold capitalize">
					{review?.user?.firstName} {review?.user?.lastName}
				</h2>
				<div className="flex items-center">
					<RatingStars rating={review?.rating} />
				</div>
			</div>
			<p className="text-sm">{review?.comment}</p>
		</div>
	);
}

export default ReviewCard;
