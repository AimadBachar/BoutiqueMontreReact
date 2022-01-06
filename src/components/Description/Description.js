import './style.scss';

const Description = () => {
    const styleSlogan = {
        color: '#f39',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '0 auto',
        padding: '1rem 0'
    };
    return (
        <div className="description">
            <h3 style={styleSlogan}>Mettez vous à l'heure avec nos magnifiques montres</h3>
        </div>
    );
}

export default Description;
