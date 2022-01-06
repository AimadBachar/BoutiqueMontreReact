import './style.scss';

const Header = () => {
    const title = "boutique de montres";
    const titleMaj = title.toUpperCase();
    return (
    <h1 className='header'>{ titleMaj }</h1>
    );
}

export default Header;