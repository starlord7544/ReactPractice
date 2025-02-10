import React from "react";
// import "./CategoryFilter.css";

export default function CategoryFilters({ openSidebar }) {
  return (
    <ul className="min-w-full max-w-full h-fit overflow-auto flex gap-1 p-1 text-white bg-[#222f3e]">
      <li
        className="flex justify-center items-center p-2.5 rounded-sm text-center text-nowrap cursor-pointer outline-none hover:outline-[1.25px] hover:outline-white"
        onClick={openSidebar}
      >
        <img src="https://via.placeholder.com/17x14" alt="menu-icon" />
        All
      </li>
      {item.map((item) => (
        <li className="flex justify-center items-center p-2.5 rounded-sm text-center text-nowrap cursor-pointer outline-none hover:outline-[1.25px] hover:outline-white">
          {item}
        </li>
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
