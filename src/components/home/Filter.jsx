import { useEffect, useRef } from 'react';
import { useHotels } from '../../app/context/hotels';
import useApiFetch from '../../hooks/useApiFetch';

function Filter({ setResult }) {
	const { getByCity } = useHotels();
	const [cities, getCities] = useApiFetch();
	const selectRef = useRef();

	useEffect(() => {
		getCities({
			url: '/cities',
		});
	}, []);

	const handleChange = () => {
		getByCity(selectRef.current.value);
		setResult('');
	};

	return (
		<div className="input-form w-full md:w-fit">
			<select
				ref={selectRef}
				onChange={handleChange}
				className="py-1 px-2 w-full focus:outline-none"
			>
				<option value="">All cities</option>
				{cities?.map((city) => (
					<option key={city?.id} value={city?.id}>
						{city?.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Filter;
