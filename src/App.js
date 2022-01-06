import './App.css';
import bannerImg from './assets/images/banner.jpg';
// Components
import Banner from './components/Banner/Banner.js';
// import Cart from './components/Cart/Cart.js';

import ShoppingList from './components/ShoppingList/ShoppingList';

// data
import products from './data/productList.js';


function App() {
  return (
    <div className="App">
      <img src={bannerImg} alt="banner-clock" className="banner-img" />
      <Banner />
      {/* <Cart /> */}
      <ShoppingList products={products}/>
    </div>
  );
}

export default App;
