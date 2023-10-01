import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const NavigateContainer = () => {

    const ServicesData = [
        {name: "Aspire Paisley", location: "Paisley Road West"},
        {name:"Aspire Queen Margaret", location: "Queen Margaret Drive"},
        {name:"Aspire Copeland", location: "Coperland Road Hotel"},
        {name: "Help the Homeless Glasgow", location:"45b Gartcraig Road, PO Box 2274, Glasgow, G33 2WX"},
        {name: "Simon Community Kent", location: "Kent Road"},
        {name:"Simon Community Maxwell", location:"Maxwell Drive"},
        {name:"Homeless Casework Team", location:"30 Mansion Street, Glasgow G22 5SZ"},
        {name:"Shelter Scotland", location:"116 Osborne Street, Glasgow"},
        {name:"Glasgow city mission", location:"20 Crimea Street, Glasgow G2 8PW"}
    ]

    const [services, setServices] = useState(ServicesData)

    return (
        <div>
            <NavBar/>
            <h1>Hello World</h1>
            <Footer/>
        </div>
      );
}
 
export default NavigateContainer;