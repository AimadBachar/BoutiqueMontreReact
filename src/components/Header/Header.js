import './style.scss';

const Header = ({title}) => {
    return (
        <div className="header">
            
            <h1 className='header'>{ title }</h1>
        </div>
    );
}

export default Header;