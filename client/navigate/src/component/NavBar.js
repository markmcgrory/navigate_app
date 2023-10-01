import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <h1>I'm a NavBar</h1>
            <Link to='/'>Home</Link>
            <Link to='/service-users'>Service Users</Link>
            <Link to='/services'>Services</Link>
        </div>
      );
}
 
export default NavBar;