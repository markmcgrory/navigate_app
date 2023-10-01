import React from 'react';

const UserItem = ({user, deleteUser, updateUser}) => {

    const handleDeleteUser = () => {
        deleteUser(user._id)
    };

    return ( 
        <div>
            <li>Name: {user.name}</li>
            <ul>Age: {user.age}</ul>
            <ul>D.O.B.: {user.dob}</ul>
            <ul><button onClick={() => deleteUser(user._id)}>Delete</button></ul>
        </div>
     );
}
 
export default UserItem;

// needs delete user functionality - passed as prop to user card
// needs update user functionality - passed as prop to user card