import React from 'react';

const UserProfile = ({selectedUser}) => {

    return ( 
        <div>
            <h1>Hi, this is user profile</h1>
            <h1>{selectedUser.name}</h1>
        </div>
    );
}
 
export default UserProfile;

//   <ul><Link to={`/update-user/${user._id}`}>Update User</Link><br></br></ul>