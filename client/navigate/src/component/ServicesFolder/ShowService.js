import React, {useState} from "react";

import styled from "styled-components";

const Container = styled.div`
display: flex;
`

const ShowService = ({selectedService}) => {

    const [serviceList, setServiceList] = useState([])

    return (
        <Container>
              <div className='ServiceProfile'>       
        <div className='image1'><img src={selectedService.image}/></div>
        <div><br></br></div>
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