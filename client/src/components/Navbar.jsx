import { Link } from 'react-router-dom';

const Navbar = () => {

	return (
		<nav className='flex items-center justify-between p-4'>
            <div className="text-2xl">
                <Link to={'/'} className="text-white">
                    ProductStore <i className="fa-solid fa-cart-shopping"></i>
                </Link>
            </div>
            <div className="logo">
                <Link to={'/create'} className="text-xl px-3 py-2 bg-gray-600 rounded-sm mr-4">
                    <i className="fa-solid fa-plus"></i>
                </Link>
                {/* <Link to={'/productcards'} className="text-xl px-3 py-2 bg-gray-600 rounded-sm">
                    Product Cards
                </Link> */}
            </div>
        </nav>
	);
};
export default Navbar;