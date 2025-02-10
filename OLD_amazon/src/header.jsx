import React from 'react'
import AmazonLogo from './assets/amazon.svg'

export default function header() {
    return (
        <div className='amazon-header'>
            <img className='amazon-branding-logo' src={AmazonLogo} alt='Amazon logo' />
            <div className='order-location-container'>
                <img className='location-icon' src="https://via.placeholder.com/15x18" alt="" />
                <div className='order-location-text'>
                    <span className='current-location'>Delivering to Dehradun 248001</span>
                    <span>Update Location</span>
                </div>
            </div>
            <div className='search-bar'>
                <select className='search-filter'>
                    <option value={"all"}>All</option>
                    <option value={"electronics"}>Electronics</option>
                    <option value={"fashion"}>Fashion</option>
                    <option value={"home"}>Home</option>
                    <option value={"grocery"}>Grocery</option>
                </select>
                <input
                    ClassName="search-input"
                    type="search"
                    placeholder="Search Amazon.in"
                />
            </div>
        </div>
    )
}
