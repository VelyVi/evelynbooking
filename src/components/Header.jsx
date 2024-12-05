import Brand from './Brand';
import Menu from './Menu';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Nav from './Nav';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="sticky top-0 bg-white h-20 w-full shadow-lg z-10">
			<div className="max-w-5xl mx-auto px-5 h-full flex items-center justify-between">
				<Brand />

				<Menu openMenu={isOpen} closeMenu={handleToggleMenu}>
					<Nav />
				</Menu>

				<button className="p-1 md:hidden" onClick={handleToggleMenu}>
					<IoMdMenu className="size-7" />
				</button>
			</div>
		</div>
	);
}

export default Header;
