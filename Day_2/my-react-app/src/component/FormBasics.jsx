import React, { useState } from 'react'
import { TextField } from '@mui/material'
import './FormBasics.css'
const FormBasics = () => {
    var[inputs, setInputs] = useState({username : '', email :'', });
    const inputHandler = (e)=>{
        console.log(e)
        setInputs({...inputs,[e.target.name]:e.target.value}) //spread operator (...variable)
    }
  return (
    <div className='formBasics'>
        <TextField required variant='outlined' label='Username' 
        onChange={inputHandler} name ='username' value = {(inputs.username)}/> <br /> <br />
        <TextField required variant='outlined' label='Email'
        onChange={inputHandler} name='email' value = {(inputs.email)}/> <br /> <br />
        <TextField required variant='outlined' label='Place'
        onChange={inputHandler} name='place' value = {(inputs.place)}/>
    </div>
  )
}

export default FormBasics