import React from "react";

import styled from "styled-components";

const Container = styled.div`
display: flex;
`

const ShowService = ({selectedService}) => {

    return (
        <Container>
              <div className='ServiceProfile'>       
        <div className='image'><img src={selectedService.image}/></div>
        <div className='ServiceProfileText'>
        <p><b>Name:</b> {selectedService.name}</p>
        <p><b>Location:</b> {selectedService.location} </p>
        {/* <p>Bed State/Capacity: ??</p> */}

        {/* <p>Grid Display List of Service Users put into service 'basket'?</p> */}
        
        </div>
    </div>


        </Container> 
     );
}
 
export default ShowService;