import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBarStyle = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`


const NavBar = () => {
    return (
        <NavBarStyle>
            <Link to='/'>Home</Link>
            <Link to='/service-users'>Service Users</Link>
            <Link to='/services'>Services</Link>
        </NavBarStyle>
      );
}
 
export default NavBar;