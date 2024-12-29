import React, { useState } from 'react'

function Login() {
    const [dataForm, setDataForm] = useState({
        username: '',
        password: ''
    })

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value })
        console.log(name + " -- " + value)
    }
    return (
        <div className='container login'>
            <p className='title'>Login form</p>
            <form className='form'>
            <div className='form-group'>
                    <label className='form-label' htmlFor='usn'>Username:</label>
                    <input type='text' name='username' className='form-input' id='usn' placeholder='Please enter your username' onChange={handleChangeInput} value={dataForm.username}/>
                </div>
                <div className='form-group'>
                    <label className='form-label' htmlFor='psw'>Password:</label>
                    <input type='password' name='password' className='form-input' id='psw' placeholder='Please enter your password'  onChange={handleChangeInput} value={dataForm.password}/>
                </div>
                <input type='submit' className='btn btn-submit' />
            </form>
        </div>
    );
}

export default Login;