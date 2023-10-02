import React from 'react';
import {Link} from 'react-router-dom'

const UserProfile = ({selectedUser, selectUser}) => {

    const handleSelectUser = () => {
        selectUser(selectedUser._id)
    }

    return ( 
        <div>       
            <img src={selectedUser.image}/>
            <p>Name: {selectedUser.name}</p>
            <p>Age: {selectedUser.age} </p>
            <p>Date of birth: {selectedUser.dob}</p>
            <p>Gender: {selectedUser.gender}</p>
            <p>Mobile number: {selectedUser.mob}</p>
            <p>Address: {selectedUser.address}</p>
            <p>Next of kin: {selectedUser.nok}</p>
            <p>Clinic: {selectedUser.clinic}</p>
            <p>Employment status: {selectedUser.employment}</p>
            
            <Link to={`/update-user/${selectedUser._id}`}><button onClick={handleSelectUser}>Update User</button></Link>
        </div>
    );
}
 
export default UserProfile;

//   <ul><Link to={`/update-user/${user._id}`}>Update User</Link><br></br></ul>