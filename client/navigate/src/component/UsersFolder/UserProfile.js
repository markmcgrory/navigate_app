import React from 'react';
import {Link} from 'react-router-dom'

const UserProfile = ({selectedUser, selectUser}) => {

    const handleSelectUser = () => {
        selectUser(selectedUser._id)
    }

    return ( 
        <div>
            <h1>Hi, this is user profile</h1>
            <h1>IMAGE HERE</h1>
            <h1>{selectedUser.name}</h1>
            <h1>{selectedUser.age}</h1>
            <h1>{selectedUser.dob}</h1>
            <Link to={`/update-user/${selectedUser._id}`}><button onClick={handleSelectUser}>Update User</button></Link>
        </div>
    );
}
 
export default UserProfile;

//   <ul><Link to={`/update-user/${user._id}`}>Update User</Link><br></br></ul>