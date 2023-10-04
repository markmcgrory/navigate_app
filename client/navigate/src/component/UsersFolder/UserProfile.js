import React from 'react';
import {Link} from 'react-router-dom'

const UserProfile = ({selectedUser, selectUser}) => {

    const handleSelectUser = () => {
        selectUser(selectedUser._id)
    }

    return ( 
        <div className='UserProfile'>       
            <div className='image'><img src={selectedUser.image}/></div>
            <div className='UserProfileText'>
            <p><b>Name:</b> {selectedUser.name}</p>
            <p><b>Age:</b> {selectedUser.age} </p>
            <p><b>Date of birth:</b> {selectedUser.dob}</p>
            <p><b>Gender:</b> {selectedUser.gender}</p>
            <p><b>Mobile number:</b> {selectedUser.mob}</p>
            <p><b>Address:</b> {selectedUser.address}</p>
            <p><b>Next of kin:</b> {selectedUser.nok}</p>
            <p><b>Clinic:</b> {selectedUser.clinic}</p>
            <p><b>Employment status:</b> {selectedUser.employment}</p>
            
            <Link to={`/update-user/${selectedUser._id}`}><button id="update-user-button" onClick={handleSelectUser}>Update User</button></Link>
            </div>
        </div>
    );
}
 
export default UserProfile;

//   <ul><Link to={`/update-user/${user._id}`}>Update User</Link><br></br></ul>