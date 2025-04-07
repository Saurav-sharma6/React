import React, { useContext, useState } from "react";
import './navbar.css'
import logo from '../Assests/logogrock.jpg'
import cartIcon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img className="img"src={logo} alt="" />
                    <p>ProVision</p>
                </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'None'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'None'}} to='/mens'>Budget</Link>{menu==='mens'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'None'}} to='/womens'>Premium</Link>{menu==='womens'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'None'}} to='/kids'>NightVision</Link>{menu==='kids'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('About')}}><Link style={{textDecoration:'None'}} to='/About'>About</Link>{menu==='About'?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link style={{textDecoration:'None'}} to='/login'><button>Login</button></Link>
                    <Link style={{textDecoration:'None'}} to='/cart'><img src={cartIcon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>


        </div>
    )
}

export default Navbar
