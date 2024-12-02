import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '../../utils';

const schema = z.object({
	checkIn: z.string().min(1, { message: 'Check-In is required' }),
	checkOut: z.string().min(1, { message: 'Check-Out is required' }),
});

function Reservations({ hotelId }) {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (dataForm) => {
		//Validaciones opcionales
		dataForm.hotelId = hotelId;
		console.log(dataForm);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex items-center justify-center gap-2 mb-4">
				<div className="flex flex-col items-center">
					<label htmlFor="check-in" className="font-semibold text-sm">
						Check-In
					</label>
					<input
						id="check-in"
						type="date"
						className="border px-3 py-1 rounded-sm"
						{...register('checkIn')}
					/>
				</div>
				<div className="flex flex-col items-center">
					<label htmlFor="check-out" className="font-semibold text-sm">
						Check-Out
					</label>
					<input
						id="check-out"
						type="date"
						className="border px-3 py-1 rounded-sm"
						{...register('checkOut')}
					/>
				</div>
				<button className="btn bg-emerald-400">Reserve</button>
			</div>
			{/*Errors */}
			<div className="flex flex-col justify-center items-center gap-2">
				<p className={cn('error-validation hidden', errors.checkIn && 'block')}>
					{errors.checkIn && errors.checkIn.message}
				</p>
				<p
					className={cn('error-validation hidden', errors.checkOut && 'block')}
				>
					{errors.checkOut && errors.checkOut.message}
				</p>
			</div>
		</form>
	);
}

export default Reservations;
