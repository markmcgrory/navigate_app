import React, { useState } from 'react';


const UpdateUserForm = ({user, updateUser}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [dob, setDob] = useState('');

    const handleNameChange = (ev) => setName(ev.target.value)
    const handleAgeChange = (ev) => setAge(ev.target.value)
    const handleDobChange = (ev) => setDob(ev.target.value)

    const handleSubmit = ev => {
        ev.preventDefault();
        updateUser({
            name: name,
            age: age,
            dob: dob
        });
        setName(user.name)
        setAge(user.age)
        setDob(user.dob);
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
            id='age'
            defaultValue={user.dob}
            required
            onChange={handleDobChange}
            />    
        </div>
        
        <input type='submit' name='submt' value="Save"/>
    </form>

     );
}
 
export default UpdateUserForm;