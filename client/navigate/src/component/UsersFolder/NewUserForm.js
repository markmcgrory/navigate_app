import React, { useState } from 'react';

const NewUserForm = ({addUser}) => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [dob, setDob] = useState('');

    const handleNameChange = (ev) => setName(ev.target.value)
    const handleAgeChange = (ev) => setAge(ev.target.value)
    const handleDobChange = (ev) => setDob(ev.target.value)

    const handleSubmit = ev => {
        ev.preventDefault();
        addUser({
            name: name,
            age: age,
            dob: dob
        });
        setName('')
        setAge(0)
        setDob('');
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <h1>Add a new user</h1>
            <div className='group'>
                <label htmlFor='name'>Name: </label>
                <input 
                type='text'
                id='name'
                value={name}
                required
                onChange={handleNameChange}
                />             
            </div>

            <div className='group'>
                <label htmlFor='age'>Age:</label>
                <input 
                type='number'
                id='age'
                value={age}
                required
                onChange={handleAgeChange}
                />    
            </div>

            <div className='group'>
                <label htmlFor='dob'>Date of Birth:</label>
                <input 
                type='text'
                id='age'
                value={dob}
                required
                onChange={handleDobChange}
                />    
            </div>
            
            <input type='submit' name='submt' value="Save"/>
        </form>



     );
}
 
export default NewUserForm;

// {addbooking} prop
// useState - local to form file
// handleNameChange, handleEmailChange, handleCheckInChange
// handleSubmit