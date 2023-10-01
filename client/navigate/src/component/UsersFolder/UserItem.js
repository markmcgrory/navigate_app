import React from 'react';

const UserItem = ({user}) => {


    return ( 
        <>
        <li>Name: {user.name}</li>
        <ul>Age: {user.age}</ul>
        <ul>D.O.B.: {user.dob}</ul>
        </>
     );
}
 
export default UserItem;