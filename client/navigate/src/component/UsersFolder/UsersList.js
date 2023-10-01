import React from 'react';
import UserItem from './UserItem';
import NewUserForm from './NewUserForm';
import {Routes, Route} from 'react-router-dom'

import styled from 'styled-components';

const GridDisplay = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: center;
gap: 10px;
`

const UserList = ({users, addUser, deleteUser, selectUser}) => {
    
    const userNodes = users.map((user)=> {
        return <UserItem 
        user={user}
        key={user._id}
        deleteUser={deleteUser}
        selectUser={selectUser}/>
    })

    // const userUpdate = users.map((user) => {
    //     return <UpdateUserForm 
    //     user={user} 
    //     key={user._id} 
    //     updateUser={updateUser}/>
    // })
    
    return (
        <div>
            {/* <Routes>
                <Route path={`/update-user/${user._id}`} element={<UpdateUserForm updateUser={updateUser} user={user}/>}/>
            </Routes> */}
            <h1>I am the Users List</h1>
            <NewUserForm addUser={addUser}/>
            <br></br>
            <GridDisplay>
                {userNodes}
            </GridDisplay>
            {/* {userUpdate} */}
        </div>
      );
}
 
export default UserList;

//  <Route path={`/update-user/${user._id}`} element={<UpdateUserForm updateUser={updateUser} user={user}/>}/>
