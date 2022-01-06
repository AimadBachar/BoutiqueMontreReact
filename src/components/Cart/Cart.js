import './style.scss';

const Cart = () => {
    const products = [
        {id: 1, name: 'Montre Dior', price: 1300 },
        {id: 2, name: 'Montre Tommy', price: 2700}, 
        {id: 3, name: 'Montre Rolex', price: 4000}
    ];

    const list = products.map(product => {
        return <li className='cart-items__item' key={product.id}>{product.name}: {product.price}</li>
    });

    const total = products.reduce((tot, product) => {
        return tot + product.price;
    }, 0);

    return (
        <div className="cart">
            <h3>Votre panier</h3>
            <div className="cart-group">
                <ul className="cart-items">
                    {list}
                </ul>
            </div>
            <div className="cart-total">
                <h4>Total: </h4>
                <h4>{ total } €</h4>
            </div>
        </div>
    )
}

export default Cart;