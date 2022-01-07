import { useState } from 'react';
import './style.scss';

// FUNCTIONS
function getIdValide(products)
{
    let id = 0;
    products.forEach((element) => {
        if(element.id > id)
        {
            id = element.id;
        }
    });
    return id + 1;
}
const Cart = () => {
    // Fake data
    const products0 = [
        {id: 1, name: 'Montre Dior', price: 1300 },
        {id: 2, name: 'Montre Tommy', price: 2700}, 
        {id: 3, name: 'Montre Rolex', price: 4000}
    ];

    // STATES
    const [products, setProduct] = useState(products0);
    const [isOpen, setIsOpen] = useState(false);

    const [list, setList] = useState(
        products.map((product) => (
            <li className='cart-items__item' key={product.id}>{product.name}: {product.price}</li>
        ))
    );
        
    // FUNCTIONS
    let Sum = 0;
  products.forEach((element) => (Sum += element.price));


  if (isOpen) {
    return (
        <div className="cart">
            <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>Cacher le panier</button>
          <h4>Votre panier</h4>
          <ul>{list}</ul>
          <div> Total:{Sum}</div>
          <button
            onClick={() => {
              products.push({
                id: getIdValide(products),
                name: "Montre Mickey",
                price: 10
              });
              setProduct(products);
              setList(
                products.map((element) => (
                  <li key={element.id}>
                    {element.name} {element.price} Eur
                  </li>
                ))
              );
            }}
          >
            Add product
          </button>
          <button onClick={() =>{
              setProduct([]);
                setList([]);
          } }>Clear cart</button>
        </div>
    )
  }
  
  return (
      <button onClick={()=>setIsOpen(true)}>Afficher le panier</button>
  )
}

export default Cart;