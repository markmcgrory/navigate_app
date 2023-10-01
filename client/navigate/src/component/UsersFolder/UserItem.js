import React from 'react';
import UpdateUserForm from './UpdateUserForm';
import { Link } from 'react-router-dom';

const UserItem = ({user, deleteUser, updateUser}) => {

    const handleDeleteUser = () => {
        deleteUser(user._id)
    };

    const handleUpdateUser = () => {
        updateUser(user._id)
    };

    return ( 
        <div>
            <li>Name: {user.name}</li>
            <ul>Age: {user.age}</ul>
            <ul>D.O.B.: {user.dob}</ul>
            <ul><button onClick={() => deleteUser(user._id)}>Delete</button></ul>
            {/* <ul><button onClick={() => updateUser(user._id)}>Update</button></ul> */}
            {/* <Link to={`/update-user/${user._id}`}>Update User</Link> */}
            <br></br>
        </div>
     );
}
 
export default UserItem;

// needs update user functionality - passed as prop to user card