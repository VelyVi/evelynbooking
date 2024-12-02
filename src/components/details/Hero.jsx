import { TfiWorld } from 'react-icons/tfi';

function Hero({ hotel }) {
	return (
		<div>
			<h1>{hotel?.name}</h1>
			<p>
				<TfiWorld />
				<span>
					{hotel?.city?.name}, {hotel?.city?.country}
				</span>
			</p>
		</div>
	);
}

export default Hero;
