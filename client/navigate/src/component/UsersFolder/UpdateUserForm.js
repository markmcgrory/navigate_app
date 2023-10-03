import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const UpdateUserForm = ({user, updateUser}) => {

    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [dob, setDob] = useState(user.dob);
    const [id, setId] = useState(user._id);
    const [gender, setGender] = useState(user.gender)
    const [mob, setMob] = useState(user.mob)
    const [address, setAddress] = useState(user.address)
    const [nok, setNok] = useState(user.nok)
    const [clinic, setClinic] = useState(user.clinic)
    const [employment, setEmployment] = useState(user.clinic)
    

    const navigate = useNavigate()

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
        console.log("HANDLE SUBMIT!!!");
        ev.preventDefault();
        updateUser({

            _id: id,
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

        <div className='group'>
            <label htmlFor='gender'>Gender:</label>
            <input 
            type='text'
            id='gender'
            defaultValue={user.gender}
            required
            onChange={handleGenderChange}
            />    
        </div>

        <div className='group'>
            <label htmlFor='mob'>Mobile:</label>
            <input 
            type='text'
            id='mob'
            defaultValue={user.mob}
            required
            onChange={handleMobChange}
            />    
        </div>

        <div className='group'>
            <label htmlFor='address'>Address:</label>
            <input 
            type='text'
            id='dob'
            defaultValue={user.address}
            required
            onChange={handleAddressChange}
            />    
        </div>

        <div className='group'>
            <label htmlFor='nok'>Next of Kin:</label>
            <input 
            type='text'
            id='nok'
            defaultValue={user.nok}
            required
            onChange={handleNokChange}
            />    
        </div>

        <div className='group'>
            <label htmlFor='clinic'>Clinic:</label>
            <input 
            type='text'
            id='clinic'
            defaultValue={user.clinic}
            required
            onChange={handleClinicChange}
            />    
        </div>

        <div className='group'>
            <label htmlFor='employment'>Employment status:</label>
            <input 
            type='text'
            id='employment'
            defaultValue={user.employment}
            required
            onChange={handleEmploymentChange}
            />    
        </div>
        
        
        <input type='submit' name='submt' value="Update"/>

    </form>

     );
}
 
export default UpdateUserForm;