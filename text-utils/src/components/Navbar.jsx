import React from 'react';
import PropTypes from 'prop-types'

const Navbar = (props) => {
    return (
        <header>
            <div className="flex justify-between items-center h-16 w-full px-10 shadow bg-gray-800">
                <h1 className="text-xl lg:text-2xl font-bold text-white cursor-pointer">
                    {props.title}
                </h1>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-gray-300 text-white">
                        {props.homeText}
                    </a>
                    <a href="#" className="hover:text-gray-300 text-white">
                        {props.aboutText}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;


Navbar.prototype = {
    title : PropTypes.string,
    aboutText : PropTypes.string,
    homeText : PropTypes.string
}

Navbar.defaultProps = {
    title : 'Text Utilities',
    aboutText : 'About',
    homeText : 'Home'
}