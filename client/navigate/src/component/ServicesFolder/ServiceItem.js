import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const ItemStyle = styled.div`
border-radius: 25px;
background-color:white;
margin: 1em;
padding: 1em;
&:hover{
  background-color: #E37C46;
  color: white;
}
`

const ServiceItem = ({service}) => {

    // const handleDeleteService = () => {
    //     deleteService(service)
    // };

    return ( 
        <ItemStyle>
            <img src={service.image}/>
            <ul>Name: {service.name}</ul>
            <ul>Location: {service.location}</ul>
            <ul>Bed State: ??</ul>
            <ul><Link to={`/service-selected/${service.id}`}>More Info</Link></ul>
            <br></br>
            {/* <ul><button onClick={() => deleteService(service)}>Delete</button></ul> */}
        </ItemStyle>
     );
}
 
export default ServiceItem;

//

