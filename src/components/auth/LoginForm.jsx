import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../app/context/auth';
import { useNavigate } from 'react-router';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

function LoginForm() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = (dataForm) => {
		login(dataForm);
		reset();
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label className="block font-semibold">Email</label>
				<input
					type="email"
					placeholder="Email"
					className="input-form"
					{...register('email')}
				/>
				{errors.email && (
					<p className="error-validation">{errors.email.message}</p>
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
					<p className="error-validation">{errors.password.message}</p>
				)}
			</div>
			<button className="btn w-full m">Sing in</button>
		</form>
	);
}

export default LoginForm;
