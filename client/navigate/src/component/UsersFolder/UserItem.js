import React from 'react';
import UpdateUserForm from './UpdateUserForm';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ItemStyle = styled.div`
border: 2px solid black;
margin: 0.5em;
padding: 1em;
`

const UserItem = ({user, deleteUser, selectUser}) => {

    const handleDeleteUser = () => {
        deleteUser(user._id)
    };

    const handleSelectUser = () => {
        selectUser(user._id)
    }

    // const handleUpdateUser = () => {
    //     updateUser(user._id)
    // };

    return ( 
        <ItemStyle>
            <ul>Name: {user.name}</ul>
            <ul>Age: {user.age}</ul>
            <ul>D.O.B.: {user.dob}</ul>
            <ul><button onClick={() => deleteUser(user._id)}>Delete</button></ul>
            {/* <ul><button onClick={() => updateUser(user._id)}>Update</button></ul> */}
            <ul><Link to={`/update-user/${user._id}`}>Update User</Link><br></br></ul>
            <ul><button onClick={handleSelectUser}>Show Profile</button></ul>
            <br></br>
        </ItemStyle>
     );
}
 
export default UserItem;

// needs update user functionality - passed as prop to user card