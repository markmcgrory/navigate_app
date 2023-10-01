import React from 'react';
import ServiceItem from './ServiceItem'
import { Routes, Route } from 'react-router-dom'

import styled from 'styled-components';

const GridDisplay = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: center;
gap: 10px;
`

const ServicesList = ({services}) => {

    const serviceNodes = services.map((service, index) => {
        return <ServiceItem service={service} key={index}/>
    })
    
    return ( 
        <>
            <h1>I am the Services List - Howdy</h1>
            <GridDisplay>
                {serviceNodes}
            </GridDisplay>

        </>
     );
}
 
export default ServicesList;