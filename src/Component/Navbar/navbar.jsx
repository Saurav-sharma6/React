import React, { useContext, useState } from "react";
import './navbar.css';
import logo from '../Assests/logogrock.jpg';
import cartIcon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div>
            <div className="navbar">
                {/* Logo Section */}
                <div className="nav-logo">
                    <img className="img" src={logo} alt="ProVision Logo" />
                    <p>ProVision</p>
                </div>

                {/* Navigation Menu */}
                <ul className="nav-menu">
                    <li onClick={() => setMenu('shop')}>
                        <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                        {menu === 'shop' && <hr />}
                    </li>
                    <li onClick={() => setMenu('mens')}>
                        <Link style={{ textDecoration: 'none' }} to='/mens'>Budget</Link>
                        {menu === 'mens' && <hr />}
                    </li>
                    <li onClick={() => setMenu('womens')}>
                        <Link style={{ textDecoration: 'none' }} to='/womens'>Premium</Link>
                        {menu === 'womens' && <hr />}
                    </li>
                    <li onClick={() => setMenu('kids')}>
                        <Link style={{ textDecoration: 'none' }} to='/kids'>NightVision</Link>
                        {menu === 'kids' && <hr />}
                    </li>
                    <li onClick={() => setMenu('About')}>
                        <Link style={{ textDecoration: 'none' }} to='/About'>About</Link>
                        {menu === 'About' && <hr />}
                    </li>
                </ul>

                {/* Login / Cart Section */}
                <div className="nav-login-cart">
                    {
                        localStorage.getItem('auth-token') 
                        ? <button onClick={() => {
                            localStorage.removeItem('auth-token');
                            window.location.replace('/');
                        }}>Logout</button>
                        : <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
                    }

                    <Link style={{ textDecoration: 'none' }} to='/cart'>
                        <img src={cartIcon} alt="Cart Icon" />
                    </Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
