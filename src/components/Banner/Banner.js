import Description from '../Description/Description.js';
import Header from '../Header/Header.js';
import './style.scss';


const Banner = () => {
    return (
        <div className="banner">
            <Header title="Boutique de montres"/>
            <Description />
        </div>
    );
}

export default Banner;