import { useEffect } from 'react';
import useApiFetch from '../../hooks/useApiFetch';
import RelatedList from './RelatedList';

function RelatedHotels({ cityId, hotelId }) {
	const [related, getRelated] = useApiFetch();

	useEffect(() => {
		if (cityId) {
			getRelated({
				url: `/hotels?cityId=${cityId}`,
			});
		}
	}, [cityId]);

	const filtered = related.filter((hotel) => hotel?.id !== hotelId);

	return (
		<div>
			<div>
				<RelatedList related={filtered} />
			</div>
		</div>
	);
}

export default RelatedHotels;
