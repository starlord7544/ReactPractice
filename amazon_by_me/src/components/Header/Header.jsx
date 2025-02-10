import React from "react";
import "./Header.css";
import AmazonLogo from "../../assets/amazon.svg";
import CartIcon from "../../assets/cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="amazon-header">
            {/* Amazon Logo */}

            <Link className="header-container" to={"/"}>
                <img
                    className="amazon-branding-logo"
                    src={AmazonLogo}
                    alt="Amazon Logo"
                />
            </Link>

            {/* Location Box */}

            <div className="header-container">
                <div className="order-location-container">
                    <img
                        className="location-icon"
                        src="https://via.placeholder.com/15x18"
                        alt="Location Icon"
                    />
                    <div className="location-text-container">
                        <span className="current-location">
                            Delivering to Dehradun 248001
                        </span>
                        <span className="update-location">Update Location</span>
                    </div>
                </div>
            </div>

            {/* Search Box */}

            <div className="search-bar">
                <select className="search-filter">
                    <option value={"all"}>All</option>
                    <option value={"electronics"}>Electronics</option>
                    <option value={"fashion"}>Fashion</option>
                    <option value={"home"}>Home</option>
                    <option value={"grocery"}>Grocery</option>
                </select>
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search Amazon.in"
                />
                <button className="search-button">O</button>
            </div>

            {/* Language Select */}

            <div className="header-container">
                <select className="language-select">
                    <option value={"en"}>🇺🇸 EN</option>
                    <option value={"hi"}>🇮🇳 HI</option>
                </select>
            </div>

            {/* Account Menu */}

            <div className="header-container">
                <div className="account-menu">
                    <span className="account-name">Hello, Sign in</span>
                    <select className="account-select">
                        <option value={"account"}>Account & Lists</option>
                        <option value={"orders"}>Orders</option>
                        <option value={"prime"}>Try Prime</option>
                    </select>
                </div>
            </div>

            {/* Return & Order Button */}

            <div className="header-container">
                <button className="returns-orders">
                    <span className="returns-pretext">Returns</span>
                    <span className="returns-maintext">& Orders</span>
                </button>
            </div>

            {/* Cart */}

            <Link className="header-container" to={"/cart"}>
                <div className="cart-container">
                    <div className="cart-icon-container">
                        <img className="cart-icon" src={CartIcon} alt="Cart Icon" />
                        <span className="cart-count">0</span>
                    </div>
                    <span className="cart-text">Cart</span>
                </div>
            </Link>
        </div>
    );
}