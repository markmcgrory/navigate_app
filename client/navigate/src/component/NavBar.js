import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'
import styled from 'styled-components';


const Image = styled.img`
position: absolute;
right: 0;
margin-block: auto;
/* margin-bottom: 100px; */



`

const NavBar = () => {
    return (
        <div className='NavBar'>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/service-users'>Service Users</Link></li>
            <li><Link to='/services'>Services</Link></li>
             <Image src={logo} width='150' height='63' alt='logo'/>

           
            
        </div>

      );
}
 
export default NavBar;