import './App.css';
import bannerImg from './assets/images/banner.jpg';
// Components
import Banner from './components/Banner/Banner.js';
// import Cart from './components/Cart/Cart.js';

import ShoppingList from './components/ShoppingList/ShoppingList';


function App() {
  return (
    <div className="App">
      <img src={bannerImg} alt="banner-clock" className="banner-img" />
      <Banner />
      {/* <Cart /> */}
      <ShoppingList />
    </div>
  );
}

export default App;
