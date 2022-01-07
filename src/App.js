import './App.css';
import bannerImg from './assets/images/banner.jpg';
// Components
import Banner from './components/Banner/Banner.js';
import Cart from './components/Cart/Cart.js';
import ShoppingList from './components/ShoppingList/ShoppingList';

// data
import products from './data/productList.js';

// import { useState } from 'react';
import Clock from './components/Clock/Clock';
import Footer from './components/Footer/Footer';

function App() {
  // let [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <img src={bannerImg} alt="banner-clock" className="banner-img"/>
      <Banner />
      <div style={{display: 'flex'}}>
        {/* <p>{ count }</p>
        <button onClick={()=>setCount(count++)}>Increment</button> */}
        <Cart />
        <Clock />
      </div>
      <ShoppingList products={products}/>
      <Footer />
    </div>
  );
}

export default App;
