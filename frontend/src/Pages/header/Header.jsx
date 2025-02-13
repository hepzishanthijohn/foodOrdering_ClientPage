import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import './Header.css';

const Header = () => {
  const { setUserInfo, userInfo, getCartCount } = useUserContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`https://restaurantwebsite-mernstack.onrender.com/users/profile`, {
          withCredentials: true
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);

  const username = userInfo?.username;
  const cartCount = getCartCount(); // Get the current cart count from context

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">FlavorFusion</Link>
      </div>

      <div className={show ? "hedLinks showmenu" : "hedLinks"}>
        <div className="links">
          {username ? (
            <Link to="/reservation">Reservation</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>

        <div className="cart-btn">
          <Link to="/cart">
            <button className="cart-icon">
              <FaShoppingCart />
              <span className="cart-count">{cartCount}</span>
            </button>
          </Link>
        </div>

        {username ? (
          <Link to="/mainpage">
            <button className="menuBtn">Logout</button>
          </Link>
        ) : (
          <Link to="/login" style={{color:"black"}} className="menuBtn">Login</Link>
        )}
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
