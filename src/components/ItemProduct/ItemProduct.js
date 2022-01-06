import './style.scss';

const ItemProduct = ({product}) => {
    return (
        <div className="card">
            <div className="item-product">
                <div className="item-product__img">
                    <img src={product.img} alt={product.name} width={400}/>
                </div>
                <div className="item-product__info">
                    <h3 className="item-product__name">{product.name}</h3>
                    <p className="item-product__price">{product.price} €</p>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;