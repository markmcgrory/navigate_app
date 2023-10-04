import React from "react";

import styled from "styled-components";

const ShowService = ({selectedService}) => {

    return (
        <div>
              <div className='ServiceProfile'>       
        <div className='image'><img src={selectedService.image}/></div>
        <div className='ServiceProfileText'>
        <p>Name: {selectedService.name}</p>
        <p>Location: {selectedService.location} </p>
        <p>Bed State/Capacity: ??</p>

        <p>Grid Display List of Service Users put into service 'basket'?</p>
        
        </div>
    </div>


        </div> 
     );
}
 
export default ShowService;