import Container from "./Container";
import { Link } from "react-router-dom";
import Logo from "../../assets/coseeing-logo-desktop-header.png";

const Header = () => {
	return (
		<header className='fixed inset-x-0 z-40 bg-teal-PRIMARY'>
			<Container className='flex items-center py-12'>
				<img src={Logo} className='' alt='Coseeing logo' />
			</Container>
		</header>
	);
};

export default Header;
