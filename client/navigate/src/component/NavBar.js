import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/service-users'>Service Users</Link></li>
            <li><Link to='/services'>Services</Link></li>
        </div>
      );
}
 
export default NavBar;