import React from 'react';

const UserItem = ({user}) => {

    return ( 
        <div>
            <li>Name: {user.name}</li>
            <ul>Age: {user.age}</ul>
            <ul>D.O.B.: {user.dob}</ul>
            <ul><button type='submit' value={deleteUser(ev.target.value)}/></ul>
        </div>
     );
}
 
export default UserItem;

// needs delete user functionality - passed as prop to user card
// needs update user functionality - passed as prop to user card