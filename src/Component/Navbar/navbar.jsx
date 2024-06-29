import React, { useState } from "react";
import './navbar.css'
import logo from '../Assests/logo.png'
import cartIcon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>Shopper</p>
                </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'None'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'None'}} to='/mens'>Mens</Link>{menu==='mens'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'None'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'None'}} to='/kids'>kids</Link>{menu==='kids'?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link style={{textDecoration:'None'}} to='/login'><button>Login</button></Link>
                    <Link style={{textDecoration:'None'}} to='/cart'><img src={cartIcon} alt="" /></Link>
                    <div className="nav-cart-count">0</div>
                </div>
            </div>


        </div>
    )
}

export default Navbar
