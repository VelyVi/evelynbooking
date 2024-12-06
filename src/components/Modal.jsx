import React from 'react';
import { cn } from '../utils';

function Modal({ children, openModal, closeModal }) {
	return (
		<div
			className={cn(
				'modal opacity-0 invisible transition-opacity ease-in-out duration-300',
				openModal && 'opacity-100 visible',
			)}
		>
			<div
				className="absolute top-0 left-0 w-full h-full bg-black/50"
				onClick={closeModal}
			/>
			<div className="bg-white p-9 relative rounded-lg shadow-lg">
				{children}
			</div>
		</div>
	);
}

export default Modal;
