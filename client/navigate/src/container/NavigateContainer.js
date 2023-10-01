import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom"
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import NewUserForm from '../component/UsersFolder/NewUserForm';
import APIService from '../component/APIService';
import UsersList from '../component/UsersFolder/UsersList';
import ServicesList from '../component/ServicesFolder/ServicesList';
import UpdateUserForm from '../component/UsersFolder/UpdateUserForm';

const NavigateContainer = () => {

    const ServicesData = [
        {name: "Aspire Paisley", location: "Paisley Road West"},
        {name:"Aspire Queen Margaret", location: "Queen Margaret Drive"},
        {name:"Aspire Copeland", location: "Coperland Road Hotel"},
        {name: "Help the Homeless Glasgow", location:"45b Gartcraig Road, PO Box 2274, Glasgow, G33 2WX"},
        {name: "Simon Community Kent", location: "Kent Road"},
        {name:"Simon Community Maxwell", location:"Maxwell Drive"},
        {name:"Homeless Casework Team", location:"30 Mansion Street, Glasgow G22 5SZ"},
        {name:"Shelter Scotland", location:"116 Osborne Street, Glasgow"},
        {name:"Glasgow City Mission", location:"20 Crimea Street, Glasgow G2 8PW"}
    ]

    const [services, setServices] = useState(ServicesData)
    const [users, setUsers] = useState([])

    useEffect(() =>{
    APIService.getUsers()
    .then(users => setUsers(users));
    }, []);

    const createUser = newUser => {
        APIService.postUser(newUser)
        .then(savedUser => setUsers([...users, savedUser]))
    };

    const deleteUser = idToDelete => {
        APIService.deleteUser(idToDelete);
        setUsers(users.filter(user => user._id !== idToDelete));
    };

    const updateUser = updatedUser => {
        APIService.updateUser(updatedUser);
        const updatedUserIndex = users.findIndex(user => user._id === updatedUser._id);
        const updatedUsers = [...users];
        updatedUsers[updatedUserIndex] = updatedUser;
        setUsers(updatedUsers); 
    };


    return (
        <div>
        <NavBar/>
            <Routes> 
                <Route path='/'/>
                <Route path='/service-users' element={<UsersList users={users} deleteUser={deleteUser} updateUser={updateUser} addUser={createUser}/>}/>
                <Route path='/services' element={<ServicesList/>}/>
                {/* <Route path={`/update-user/${user._id}`} element={<UpdateUserForm updateUser={updateUser}/>}/> */}
            </Routes>
            <Footer/>
        </div>
      );
}
 
export default NavigateContainer;