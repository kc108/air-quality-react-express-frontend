import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
          <Link to="/">
              Main
          </Link> 
          <Link to="/profile">
              Profile
          </Link> 
          <Link to="/login">
              Login
          </Link> 
        </nav>
    )
}

export default Nav;
