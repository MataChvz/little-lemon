import React from "react";

const Nav = () => {
    return (
        <nav >
            <ul className="Nav">
                <img src="logo.jpg" alt="logo" />
                <li><a href="http://">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Menu</a></li>
                <li><a href="http://">Reservation</a></li>
                <li><a href="http://">Order Online</a></li>
                <li><a href="http://">Login</a></li>
            </ul>
        </nav>
    )
};

export default Nav;