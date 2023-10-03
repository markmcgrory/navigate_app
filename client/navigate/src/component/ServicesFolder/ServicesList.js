import React from 'react';
import ServiceItem from './ServiceItem'
import { Routes, Route } from 'react-router-dom'

import styled from 'styled-components';
import ArcGISMap from '../Map/ArcGISMap';

const GridDisplay = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: center;
gap: 10px;
`
const ServicesList = ({services, selectService, selectedService}) => {

    const serviceNodes = services.map((service, index) => {
        return <ServiceItem service={service} key={index}/>
    })
    
    return ( 
        <div className='ServiceList'>
            <div className='GridDisplay'>
            <ArcGISMap/>
                <GridDisplay>{serviceNodes}</GridDisplay>
            </div>

        </div>
     );
}
 
export default ServicesList;