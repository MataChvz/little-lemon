import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav >
            <ul className="Nav">
               <Link to="/Home"> <img src="logo.jpg" alt="logo"/> </Link>
               <Link to="/Home">  <li>Home</li> </Link>
                <li>Menu</li>
                <Link to="/Booking"> <li>Reservation</li> </Link>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
};

export default Nav;