import React from 'react';
import styled from 'styled-components';
const Paragraph = styled.p`
text-align: center;
background:#010536;
padding:2em;
color: white;
margin:0;
margin-top:20px;
bottom: 0px;
position: fixed;
width: 100%;
position:fixed;
bottom: 0px;
font-size:0.7em;
`
const Footer = () => {
    return (
      <Paragraph>M.I.M.E™ is a trademark of M.I.M.E International Limited.
      ©2023 M.I.M.E International Limited. All Rights Reserved.</Paragraph>     );
}
export default Footer;