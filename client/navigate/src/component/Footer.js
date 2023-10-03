import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: white;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: block;
  color: #c63d2f;
  text-align: center;
  font-size: 0.5rem;
  font-weight: bold;
  padding:0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  height:2em;
  `

const Footer = () => {
    return ( 
        <FooterStyled>
            <h1>&copy; 2023 M.I.M.E</h1>
        </FooterStyled>
     );
}
 
export default Footer;