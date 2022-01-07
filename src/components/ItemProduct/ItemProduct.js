import './style.scss';


const ItemProduct = ({product}) => {
    const handleClick = () => {
        alert(`Vous avez cliqué sur le produit ${product.name}, Bon choix !`);
    }
    return (
        <div className="card" onClick={handleClick}>
            <div className="item-product">
                <div className="item-product__img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="item-product__info">
                    <h3 className="item-product__name">{product.name}</h3>
                    <p className="item-product__price">{product.price} €</p>
                {product.isSaled && <p className="item-product__sale">Solde</p>} 
                {product.quantity === 0 && <span className="item-product__out-of-stock" style={{color: 'red'}}>Out of stock</span>}
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;