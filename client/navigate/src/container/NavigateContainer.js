 import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom"
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import NewUserForm from '../component/UsersFolder/NewUserForm';
import APIService from '../component/APIService';
import UsersList from '../component/UsersFolder/UsersList';
import ServicesList from '../component/ServicesFolder/ServicesList';
import UpdateUserForm from '../component/UsersFolder/UpdateUserForm';
import ServiceItem from '../component/ServicesFolder/ServiceItem';
import UserProfile from '../component/UsersFolder/UserProfile';
import HomePage from '../component/HomePage';
import ShowService from '../component/ServicesFolder/ShowService';


const image_11 = require('../component/images/image_11.png')
const image_12 = require('../component/images/image_12.png')
const image_13 = require('../component/images/image_13.png')
const image_14 = require('../component/images/image_14.png')
const image_15 = require('../component/images/image_15.png')
const image_16 = require('../component/images/image_16.png')
const image_17 = require('../component/images/image_17.png')
const image_18 = require('../component/images/image_18.png')
const image_19 = require('../component/images/image_19.png')

const NavigateContainer = () => {

    const ServicesData = [
        {name: "Aspire Paisley", location: "1610 Paisley Road West, Glasgow, G52 3QN", xy: [-4.336153, 55.846321], image: image_11, id: 1, bedStatus: 20},
        {name:"Aspire Queen Margaret", location: "117 Queen Margaret Drive, Glasgow G20 8PB", xy: [-4.284379, 55.880659], image: image_12, id: 2, bedStatus: 18},
        {name:"Aspire Copeland", location: "78 -80 Coperland Road, Glasgow, G51 2RT", xy:[-4.302981 , 55.856343], image: image_13, id: 3, bedStatus: 14},
        {name: "Help the Homeless Glasgow", location:"45b Gartcraig Road, PO Box 2274, Glasgow, G33 2WX", xy: [-4.184007, 55.865911], image: image_14, id: 4, bedStatus: 13},
        {name: "Simon Glasgow Access Hub", location: "389 Argyle Street, Glasgow G2 8LR",  xy: [-4.336142, 55.846322], image: image_15, id: 5, bedStatus: 11},
        {name:"Simon Community Maxwell", location:"35 Maxwell Drive, Pollockshields, Glasgow, G41 5DT", xy: [-4.285179, 55.845484], image: image_16, id: 6, bedStatus: 10},
        {name:"Homeless Casework Team", location:"30 Mansion Street, Glasgow G22 5SZ", xy: [-4.256163, 55.885845], image: image_17, id: 7, bedStatus: 8},
        {name:"Shelter Scotland", location:"116 Osborne Street, Glasgow, G1 4RZ", xy: [-4.249488, 55.856887], image: image_18, id: 8, bedStatus: 5},
        {name:"Glasgow City Mission", location:"20 Crimea Street, Glasgow G2 8PW", xy: [-4.265525, 55.858022], image: image_19, id: 9, bedStatus:2}
    ]

    const [services, setServices] = useState(ServicesData)
    const [selectedService, setSelectedService] = useState([])

    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState([])

    useEffect(() =>{
    APIService.getUsers()
    .then(users => setUsers(users));
    }, []);

    useEffect(() => {
        console.log(selectedService);
    }, [selectedService])

    const createUser = newUser => {
        APIService.postUser(newUser)
        .then(savedUser => setUsers([...users, savedUser]))
    };

    const deleteUser = idToDelete => {
        APIService.deleteUser(idToDelete);
        setUsers(users.filter(user => user._id !== idToDelete));
    };

    const updateUser = data => {
        console.log("data", data);
        APIService.updateUser(data);
        const updatedUserIndex = users.findIndex(user => user._id === data._id);
        const updatedUsers = [...users];
        updatedUsers[updatedUserIndex] = data;
        setUsers(updatedUsers);
        
    };

    const selectUser = user_id => {
        for(let user of users){
            // console.log("user", user);
            // console.log("search term", user_id)
            if (user._id === user_id){
                console.log(user);
                setSelectedUser(user)
            }
        }}

        // setSelectedUser(users.filter(user => user._id === user_id))
        // setSelectedUser("Hello")

    const selectService = serviceData => {
        console.log("HEEEELLLOOOOOOO");
        for (let service in services){
            if (service.id === serviceData){
                setSelectedService(service)
            };
        };
    };


    return (
        <div className='StyleContainer'>
        <NavBar/>
            <Routes> 
                <Route path='/' element={<HomePage/>}/>
                <Route path={`/user-profile/${selectedUser._id}`} element={<UserProfile selectedUser={selectedUser} selectUser={selectUser}/>}/>

                <Route path='/service-users' element={<UsersList users={users} deleteUser={deleteUser} selectUser={selectUser} addUser={createUser}/>}/>

                <Route path='/services' element={<ServicesList services={services} selectService={selectService} selectedService={selectedService}/>}/>

                <Route path={`/service-selected/${selectedService.id}`} element={<ShowService selectedService={selectedService}/>}/>

                <Route path={`/update-user/${selectedUser._id}`} element={<UpdateUserForm user={selectedUser} updateUser={updateUser}/>} />
            </Routes>
            <Footer/>
        </div>
      );
};
 
export default NavigateContainer;