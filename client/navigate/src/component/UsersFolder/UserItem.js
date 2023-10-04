import React from 'react';
import UpdateUserForm from './UpdateUserForm';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ItemStyle = styled.div`
border-radius: 25px;
border: 1px solid #90AACB;
background-color:white;
margin: 0em;
padding: 1em;
&:hover{
  /* background-color: #E37C46; */
  /* color: white; */
}
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
            <figure><img src={user["image"]}  alt="photo"/></figure>
            <ul><b>Name:</b> {user.name}</ul>
            <ul><b>Age:</b> {user.age}</ul>
            <ul><b>D.O.B.:</b> {user.dob}</ul>
            <ul><button id="delete-button" onClick={() => deleteUser(user._id)}>Delete</button></ul>
            {/* <ul><button onClick={() => updateUser(user._id)}>Update</button></ul> */}
            {/* <ul><Link to={`/update-user/${user._id}`}>Update User</Link><br></br></ul> */}
            <ul><Link to={`/user-profile/${user._id}`}><button onClick={handleSelectUser}>Show Profile</button></Link></ul>
            <br></br>
        </ItemStyle>
     );
}
 
export default UserItem;

// needs update user functionality - passed as prop to user card