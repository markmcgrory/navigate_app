import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const ItemStyle = styled.div`
border: 2px solid black;
margin: 0.5em;
padding: 1em;
`

const ServiceItem = ({service}) => {

    // const handleDeleteService = () => {
    //     deleteService(service)
    // };

    return ( 
        <ItemStyle>
            <ul>Name: {service.name}</ul>
            <ul>Location: {service.name}</ul>
            <ul>Bed State: ??</ul>
            <ul><Link to={`/service-selected/${service.id}`}>More Info</Link></ul>
            <br></br>
            {/* <ul><button onClick={() => deleteService(service)}>Delete</button></ul> */}
        </ItemStyle>
     );
}
 
export default ServiceItem;

//

