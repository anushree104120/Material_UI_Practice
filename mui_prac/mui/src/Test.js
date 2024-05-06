import React, { useState } from 'react'
import {TextField, Typography} from '@mui/material'; 
import {Button} from '@mui/material';
// import {Checkbox}from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const Test = () => {
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",
        subscribe:false
    });
    const handleChange =(e)=>{
       setInputs((prev)=>({
        ...inputs,
        [e.target.name]:e.target.value

       }));


    };
    const handleSubmit=(e)=>{
e.preventDefault();
console.log(inputs);
    }
  return (
    <>
    <Typography variant='h2'>Hello just testing MUI</Typography>
    <div>
         <Button size='large' variant='outlined'>Login</Button>
    <Button>Signup</Button>

    </div>
    <div>
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
        <TextField  name ="name"type={"text"} value={inputs.name} placeholder='Enter your name' sx={{margin:3}} onChange={handleChange}
        ></TextField>
        <TextField  name = "email" type={'email'} placeholder='Enter your email' value={inputs.email} sx={{margin:3}} onChange={handleChange}></TextField>
        <TextField  name = "password" type={'password'} placeholder='Enter your password' value={inputs.password} sx={{margin:3}} onChange={handleChange}></TextField>
        <FormGroup>
  <FormControlLabel control={<Checkbox onChange={()=>{
    setInputs((prev)=>({
        ...inputs,
        subscribe:!inputs.subscribe
    }))
  }} />} label="Subscribe" />
  {/* <FormControlLabel required control={<Checkbox />} label="Required" />
  <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
</FormGroup>
       
       
        <Button type={"submit"} variant='contained' size='large' sx={{marginTop:3.5}}> Submit </Button>
        
        </form>
    </div>

    </>
   

  )
}
