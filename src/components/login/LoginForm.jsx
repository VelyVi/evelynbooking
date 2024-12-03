import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

function LoginForm() {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = (dataForm) => {
		console.log(dataForm);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label className="block font-semibold">Email</label>
				<input
					type="email"
					placeholder="Email"
					className="input-form"
					{...register('email')}
				/>
				{errors.email && (
					<span className="error-validation block my-4">
						{errors.email.message}
					</span>
				)}
			</div>
			<div className="mb-4">
				<label className="block font-semibold">Password</label>
				<input
					type="password"
					placeholder="Password"
					className="input-form"
					{...register('password')}
				/>
				{errors.password && (
					<span className="error-validation block my-4">
						{errors.password.message}
					</span>
				)}
			</div>
			<button className="btn w-full m">Login</button>
		</form>
	);
}

export default LoginForm;
