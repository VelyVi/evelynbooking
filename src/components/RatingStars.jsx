import { FaRegStar, FaStarHalfStroke, FaStar } from 'react-icons/fa6';

function RatingStars({ rating }) {
	const renderStar = (index) => {
		if (index < Math.floor(rating)) {
			return <FaStar />; // Estrella Completa
		} else if (index < rating) {
			return <FaStarHalfStroke />; //Estrella mitad
		} else {
			return <FaRegStar />; // Estrella Vacia.
		}
	};

	return (
		<div className="flex items-center gap-2">
			<span className="flex items-center">
				{[...Array(5)].map((_, index) => {
					return (
						<span key={index} className="text-amber-300 text-lg">
							{renderStar(index)}
						</span>
					);
				})}
			</span>{' '}
			<span className="text-gray-400">{rating}</span>
		</div>
	);
}

export default RatingStars;
