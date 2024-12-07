import RelatedCard from './RelatedCard';

function RelatedList({ related }) {
	return (
		<div>
			{related?.map((hotel) => (
				<RelatedCard key={hotel?.id} hotel={hotel} />
			))}

			{related?.length === 0 && (
				<p className="font-semibold text-center">No related hotels found.</p>
			)}
		</div>
	);
}

export default RelatedList;
