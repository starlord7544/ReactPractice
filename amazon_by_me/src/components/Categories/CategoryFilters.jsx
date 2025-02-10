import React from "react";
import "./CategoryFilter.css";

export default function CategoryFilters({ openSidebar }) {
    return (
        <ul className="category-list">
            <li className="category-item" onClick={openSidebar}>
                <img src="https://via.placeholder.com/17x14" alt="menu-icon" />
                All
            </li>
            {item.map((item) => (
                <li className="category-item">{item}</li>
            ))}
        </ul>
    );
}

const item = [
    "Fresh",
    "MX Player",
    "Sell",
    "Gift Cards",
    "Amazon Pay",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Today's Deals",
    "Browsing History",
    "Customer Service",
    "Home Improvement",
    "Eshank's Amazon.in",
    "Health, Household & Personal Care",
    "Kindle eBooks",
    "Mobiles",
    "Books",
    "New Releases",
    "Best Sellers",
    "Beauty & Personal Care",
    "Electronics",
    "Subscribe & Save",
    "Sports, Fitness & Outdoors",
    "Prime",
    "Home & Kitchen",
    "Fashion",
    "Computers",
    "Toys & Games",
    "Car & Motorbike",
    "Baby",
    "Pet Supplies",
    "Video Games",
    "Previous slide",
];