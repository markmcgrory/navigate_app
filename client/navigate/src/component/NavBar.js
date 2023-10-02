import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBarStyle = styled.div`
width: 100%;
list-style-type: none;
display: block;
margin: 0;
padding: 0;
background-color:white;
height: 4rem;   
`


const NavBar = () => {
    return (
        <NavBarStyle>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/service-users'>Service Users</Link></li>
            <li><Link to='/services'>Services</Link></li>
        </NavBarStyle>
      );
}
 
export default NavBar;