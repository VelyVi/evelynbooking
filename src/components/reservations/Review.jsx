import { useState } from 'react';
import ReviewRating from './ReviewRating';
import useApiFetch from '../../hooks/useApiFetch';

const initialState = {
	hotelId: null,
	rating: 0,
	comment: '',
};

function Review({ hotelId, closeModal }) {
	const [_, fetchReview] = useApiFetch();
	const [review, setReview] = useState(initialState);
	const [error, setError] = useState(null);

	const handleSubmit = () => {
		const { comment, rating } = review;
		if (!comment || rating === 0) {
			setError('Please fill all the fields');
			setTimeout(() => setError(null), 3000);
			return;
		}
		fetchReview({
			url: '/reviews',
			method: 'POST',
			body: {
				...review,
				hotelId,
			},
		});
		setReview(initialState);
		closeModal();
	};
	return (
		<div className="w-80">
			<h2 className="text-2xl font-semibold mb-3">Review</h2>
			<div className="mb-3">
				<ReviewRating setReview={setReview} />
			</div>
			<textarea
				className="input-form resize-none h-24 mb-3"
				placeholder="Leave your review..."
				value={review.comment}
				onChange={(e) => setReview({ ...review, comment: e.target.value })}
			></textarea>
			{error && <p className="error-validation mb-3">{error}</p>}

			<div className="flex flex-row-reverse">
				<button className="btn" onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Review;
