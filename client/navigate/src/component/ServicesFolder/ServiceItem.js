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

const ServiceItem = ({service, selectService}) => {

   // Service item becomes like a checkout basket - service users can be assigned, unassigned
   // details are rendered as a list through each service when they are deposited

    const handleSelectService = () => {
      // ev.preventDefault()
      selectService(service.id)
      // selected = true
  }

    return ( 
        <ItemStyle>
            <img src={service.image}/>
            <ul>Name: {service.name}</ul>
            <ul>Location: {service.location}</ul>
            <ul>Bed State: ??</ul>
            <ul><Link to={`/service-selected/${service.id}`}><button onClick={handleSelectService}>More Info</button></Link></ul>
            <button onClick={handleSelectService}>Show On Map</button>
            <br></br>
            {/* {selected ? <h3>Selected</h3> : <h3>Not Selected</h3>} */}
        </ItemStyle>
     );
}
 
export default ServiceItem;

//

