import ItemProduct from '../ItemProduct/ItemProduct.js';
// data
import products from '../../data/productList.js';

// scss
import './style.scss';

const ShoppingList = () => {
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