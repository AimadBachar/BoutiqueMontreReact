import ItemProduct from '../ItemProduct/ItemProduct.js';


// scss
import './style.scss';

const ShoppingList = (props) => {
    const products = props.products;
    const productsList = products.map(product => {
        return (
            <ItemProduct product={product} key={product.id} />
        );
    });
    return (
        <div className="shopping-list">
            {productsList}
        </div>
        );
}



export default ShoppingList;