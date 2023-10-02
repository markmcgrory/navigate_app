import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const UpdateUserForm = ({user, updateUser}) => {

    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [dob, setDob] = useState(user.dob);
    const [id, setId] = useState(user._id);

    const navigate = useNavigate()

    const handleNameChange = (ev) => setName(ev.target.value)
    const handleAgeChange = (ev) => setAge(ev.target.value)
    const handleDobChange = (ev) => setDob(ev.target.value)

    const handleSubmit = ev => {
        console.log("HANDLE SUBMIT!!!");
        ev.preventDefault();
        updateUser({

            _id: id,
            name: name,
            age: age,
            dob: dob
        });
        navigate("/service-users")
        // setName(name)
        // setAge(age)
        // setDob(dob);
    }
    
    return ( 
        <form onSubmit={handleSubmit}>

        <h1>Update User</h1>
        <div className='group'>
            <label htmlFor='name'>Name: </label>
            <input 
            type='text'
            id='name'
            defaultValue={user.name}
            required
            onChange={handleNameChange}
            />             
        </div>

        <div className='group'>
            <label htmlFor='age'>Age:</label>
            <input 
            type='number'
            id='age'
            defaultValue={user.age}
            required
            onChange={handleAgeChange}
            />    
        </div>

        <div className='group'>
            <label htmlFor='dob'>Date of Birth:</label>
            <input 
            type='text'
            id='dob'
            defaultValue={user.dob}
            required
            onChange={handleDobChange}
            />    
        </div>
        
        {/* <Link to={`/user-profile/${user._id}`}><input type='submit' name='submt' value="Update"/></Link> */}
        <input type='submit' name='submt' value="Update"/>

    </form>

     );
}
 
export default UpdateUserForm;