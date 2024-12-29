import React, { useState } from 'react'
import axios from 'axios';

function Registration() {

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value })
        console.log(name + " -- " + value)
    }

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (dataForm.password !== dataForm.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', dataForm);
            alert('Registration successful');
            console.log(response.data);
            setDataForm({
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                firstName: '',
                lastName: ''
            })
        } catch (error) {
            alert('Registration failed');
            console.error(error);
        }

    }

    return (
        <div className='container registration'>
            <p className='title'>Registration form</p>
            <form className='form' onSubmit={handleRegistration}>
                <div className='form-group'>
                    <label className='form-label' htmlFor='usn'>Username:</label>
                    <input type='text' name='username' className='form-input' id='usn' placeholder='Please enter your username' onChange={handleChangeInput} value={dataForm.username} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='psw'>Password:</label>
                    <input type='password' name='password' className='form-input' id='psw' placeholder='Please enter your password' onChange={handleChangeInput} value={dataForm.password} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='cpsw'>Confirm Password:</label>
                    <input type='password' name='confirmPassword' className='form-input' id='cpsw' placeholder='Please confirm your password' onChange={handleChangeInput} value={dataForm.confirmPassword} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='email'>Email:</label>
                    <input type='email' name='email' className='form-input' id='email' placeholder='Please enter your email' onChange={handleChangeInput} value={dataForm.email} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='fsrn'>First Name:</label>
                    <input type='text' name='firstName' className='form-input' id='fsrn' placeholder='Please enter your first name' onChange={handleChangeInput} value={dataForm.firstName} />
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='lstn'>Last Name:</label>
                    <input type='text' name='lastName' className='form-input' id='lstn' placeholder='Please enter your last name' onChange={handleChangeInput} value={dataForm.lastName} />
                </div>
                <input type='submit' className='btn btn-submit' />
            </form>
        </div>
    );
}

export default Registration;