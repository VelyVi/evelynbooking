import { LuCalendarDays } from 'react-icons/lu';
import { FaLocationDot } from 'react-icons/fa6';
import { RiHotelBedFill } from 'react-icons/ri';
import { GrMoney } from 'react-icons/gr';

import { priceFormat } from '../../utils';

function ReservationCard({ reservation }) {
	//Sacar la duración de la estancia
	const checkInDay = new Date(reservation.checkIn + 'T00:00:00');
	const checkOutDay = new Date(reservation.checkOut + 'T00:00:00');

	//Calculamos el total de noches
	const milisecondsPerDay = 1000 * 60 * 60 * 24;

	const nights = Math.ceil((checkOutDay - checkInDay) / milisecondsPerDay);

	//Sumar el precio de las noches por el precio de la habitacion
	const pricePerNight = parseInt(reservation?.hotel?.price, 10);

	return (
		<div className="bg-white-500 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500 m-5">
			<h2 className="text-xl font-semibold p-4">{reservation?.hotel.name}</h2>

			<div className="p-6 flex flex-col gap-5">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<LuCalendarDays className="size-7" />
						<div>
							<p className="font-semibold">Check-in</p>
							<p className="text-xs">{reservation.checkIn}</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<LuCalendarDays className="size-7" />
						<div>
							<p className="font-semibold">Check-out</p>
							<p className="text-xs">{reservation.checkOut}</p>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-1">
					<FaLocationDot />
					<p className="text-sm">
						{reservation?.hotel?.city?.name},{reservation?.hotel?.city?.country}
					</p>
				</div>

				<div className="flex items-center gap-1">
					<RiHotelBedFill />
					<p>
						{nights} {nights === 1 ? 'night' : 'nights'}
					</p>
				</div>

				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<GrMoney />
						<p>Price per night</p>
					</div>

					<p className="font-semibold">{priceFormat.format(pricePerNight)}</p>
				</div>
			</div>
			<div>
				<button>Delete</button>
				<button>Rate</button>
			</div>
		</div>
	);
}

export default ReservationCard;
