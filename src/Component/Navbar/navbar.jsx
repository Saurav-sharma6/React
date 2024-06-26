import React from "react";
import './navbar.css'
import logo from '../Assests/logo.png'
import cartIcon from '../Assests/cart_icon.png'

const navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>Shopper</p>
                </div>
                <ul className="nav-menu">
                    <li>Shop<hr/></li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
                <div className="nav-login-cart">
                    <button>Login</button>
                    <img src={cartIcon} alt="" />
                    <div className="nav-cart-count">0</div>
                </div>
            </div>


        </div>
    )
}

export default navbar
