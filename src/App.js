import './App.css';
import bannerImg from './assets/images/clocks-g53283f3cb_640.jpg';
// Components
import Banner from './components/Banner/Banner.js';
import Cart from './components/Cart/Cart.js';

function App() {
  return (
    <div className="App">
      <img src={bannerImg} alt="banner-clock" className="banner-img" />
      <Banner />
      <Cart />
    </div>
  );
}

export default App;
