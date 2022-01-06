const Cart = () => {
    const price1 = 100;
    const price2 = 200;
    const price3 = 300;
    return (
        <div className="cart">
            <h3>Votre panier</h3>
            <div className="cart-item">
                <ul className="cart-item">
                    <li>Montre Dior: {price1} €</li>
                    <li>Montre Tommy: {price2} €</li>
                    <li>Montre Rolexe: {price3} €</li>
                </ul>
            </div>
            <div className="cart-total">
                <h3>Total</h3>
                <h3>{price1 + price2 + price3} €</h3>
            </div>
        </div>
    )
}

export default Cart;