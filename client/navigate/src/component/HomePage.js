import React from "react";

import styled, { keyframes } from "styled-components";

import image1 from './images/image1.png'


const BackgroundImage = styled.div`
background-image: url(${image1});
background-size: cover;
background-position: center;
background-attachment: fixed;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
overflow: hidden;

`

const HeaderStyle = styled.h1`
color: whitesmoke;
font-size: 5em;
animation: fadeIn 5s;
&:hover {
    opacity: 0.7;
}
@keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1;}
}
`
const HeaderStyle1 = styled.h1`
color: whitesmoke;
font-size: 4em;
animation: fadeIn 10s;
&:hover {
    opacity: 0.7;
}
@keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1;}
}
`

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 25em
`

const HomePage = () => {
    return ( 
        <BackgroundImage>
            <HeaderContainer>
            <HeaderStyle>Navigate</HeaderStyle>
            <HeaderStyle1>Helping People Find Shelter</HeaderStyle1>
            </HeaderContainer>
        </BackgroundImage>
     );
}
 
export default HomePage;