import React, { useState } from 'react';

const NewUserForm = ({addUser}) => {
    
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [mob, setMob] = useState('');
    const [address, setAddress] = useState('');
    const [nok, setNok] = useState('');
    const [clinic, setClinic] = useState('');
    const [employment, setEmployment] = useState('');


    const handleNameChange = (ev) => setName(ev.target.value)
    const handleAgeChange = (ev) => setAge(ev.target.value)
    const handleDobChange = (ev) => setDob(ev.target.value)
    const handleGenderChange = (ev) => setGender(ev.target.value)
    const handleMobChange = (ev) => setMob(ev.target.value)
    const handleAddressChange = (ev) => setAddress(ev.target.value)
    const handleNokChange = (ev) => setNok(ev.target.value)
    const handleClinicChange = (ev) => setClinic(ev.target.value)
    const handleEmploymentChange = (ev) => setEmployment(ev.target.value)

    const handleSubmit = ev => {
        ev.preventDefault();
        addUser({
            name: name,
            age: age,
            dob: dob,
            gender: gender,
            mob: mob,
            address: address,
            nok: nok,
            clinic: clinic,
            employment: employment
        });
        setName('')
        setAge(0)
        setDob('')
        setGender('')
        setMob('')
        setAddress('')
        setNok('')
        setClinic('')
        setEmployment('');
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

            <div className='group'>
                <label htmlFor='gender'>Gender:</label>
                <input 
                type='text'
                id='gender'
                value={gender}
                required
                onChange={handleGenderChange}
                />    
            </div>

            <div className='group'>
                <label htmlFor='mob'>Mobile:</label>
                <input 
                type='text'
                id='mob'
                value={mob}
                required
                onChange={handleMobChange}
                />    
            </div>

            <div className='group'>
                <label htmlFor='address'>Address:</label>
                <input 
                type='text'
                id='address'
                value={address}
                required
                onChange={handleAddressChange}
                />    
            </div>

            <div className='group'>
                <label htmlFor='nok'>Next of Kin:</label>
                <input 
                type='text'
                id='nok'
                value={nok}
                required
                onChange={handleNokChange}
                />    
            </div>

            <div className='group'>
                <label htmlFor='clinic'>Clinic:</label>
                <input 
                type='text'
                id='clinic'
                value={clinic}
                required
                onChange={handleClinicChange}
                />    
            </div>

            <div className='group'>
                <label htmlFor='employment'>Employment:</label>
                <input 
                type='text'
                id='employment'
                value={employment}
                required
                onChange={handleEmploymentChange}
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