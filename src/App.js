import './App.css';
import bannerImg from './assets/images/banner.jpg';
// Components
import Banner from './components/Banner/Banner.js';
// import Cart from './components/Cart/Cart.js';
import ShoppingList from './components/ShoppingList/ShoppingList';

// data
import products from './data/productList.js';

// import { useState } from 'react';
import Clock from './components/Clock/Clock';

function App() {
  // let [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <img src={bannerImg} alt="banner-clock" className="banner-img"/>
      <Banner />
      {/* <p>{ count }</p>
      <button onClick={()=>setCount(count++)}>Increment</button> */}
      {/* <Cart /> */}
      <Clock />
      <ShoppingList products={products}/>
    </div>
  );
}

export default App;
