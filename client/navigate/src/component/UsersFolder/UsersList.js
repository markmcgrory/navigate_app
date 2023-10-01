import React from 'react';
import UserItem from './UserItem';
import NewUserForm from './NewUserForm';

const UserList = ({users, addUser, deleteUser, updateUser}) => {
    
    const userNodes = users.map((user)=> {
        return <UserItem 
        user={user}
        key={user._id}
        deleteUser={deleteUser}
        updateUser={updateUser}/>
    })
    
    return (
        <div>
            <h1>I am the Users List</h1>
            <NewUserForm addUser={addUser}/>
            <br></br>
            {userNodes}
        </div>
      );
}
 
export default UserList;