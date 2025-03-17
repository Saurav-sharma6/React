import './App.css';
import Navbar from './Component/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assests/banner_mens.png'
import Women_banner from './Component/Assests/banner_women.png'
import kid_banner from './Component/Assests/banner_kids.png'
import About from './Component/About/About';
import Checkout from './Component/Checkout/checkout';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Shop/>}/>
        <Route path='/mens'  element={<ShopCategory banner={men_banner}  category = "men"/>}/>
        <Route path='/womens'  element={<ShopCategory  banner={Women_banner} category = "women"/>}/>
        <Route path='/kids'  element={<ShopCategory banner={kid_banner} category = "kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/login'  element={<LoginSignup/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>


    </div>
  );
}

export default App;
