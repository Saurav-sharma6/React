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
import ContactUs from './Component/Contactus/ContactUs';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Shop/>}/>
        <Route path='/budget'  element={<ShopCategory   category = "men"/>}/>
        <Route path='/premium'  element={<ShopCategory   category = "women"/>}/>
        <Route path='/Nightvision'  element={<ShopCategory  category = "kid"/>}/>
        <Route path='/contact'  element={<ContactUs/>}/>
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
