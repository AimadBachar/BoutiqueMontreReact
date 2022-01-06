import Description from '../Description/Description.js';
import Header from '../Header/Header.js';
import './style.scss';


const Banner = () => {
    return (
        <div className="banner">
            <Header />
            <Description />
        </div>
    );
}

export default Banner;