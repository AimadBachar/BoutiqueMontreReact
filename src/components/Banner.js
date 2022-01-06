import Description from './Description.js';
import Header from './Header.js';
import Cart from './Cart.js';

const Banner = () => {
    return (
        <div className="banner">
            <Header />
            <Cart />
            <Description />
        </div>
    );
}

export default Banner;