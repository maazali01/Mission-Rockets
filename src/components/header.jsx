import React from 'react';
import './Header.css';
import { FaSpaceAwesome } from "react-icons/fa6";

const Header = () => {
    return (
        <div>
            <div className='Icon'>
                <FaSpaceAwesome/>
            </div>
            <h1 className="title">Space Travelers Hub</h1>
        </div>
    )

};

export default Header;