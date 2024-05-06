import React, { useState } from 'react'
import {Box, TextField, Typography,Button} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const Test = () => {
    const [isSignup,setSignUp]=useState(false)
    const [input,setInput]=useState({
        name:"",
        password:"",
        email:""
    })
    // console.log(isSignup);
    const handlechange = (e)=>{
        // e.preventDefault();
        setInput((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        })
           
        )
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(input);
    }
    const resetState=()=>{
        setSignUp(!isSignup);
        setInput({
            name:"",
            password:"",
            email:""
        })

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems={"center"} justifyContent={"center"} margin={"auto"} marginTop={5} padding={3} borderRadius={5} boxShadow={"5px 5px 10px #ccc"} sx={{":hover":{
                boxShadow:'10px 10px 20px #ccc'
            }}}>
                <Typography variant='h2' padding={3} textAlign={"center"}>{isSignup? "Sign Up" : "Login"}</Typography>
               {isSignup &&(
                  <TextField margin="normal" variant="outlined" placeholder='Name' type='text' name="name" value={input.name} onChange={handlechange}></TextField>
               )}
              
               
                <TextField margin="normal"  variant="outlined"  placeholder='Email' type='email' value={input.email} name="email" onChange={handlechange}></TextField>
                <TextField margin="normal"  variant="outlined"  placeholder='Password' type='password' value={input.password} name="password" onChange={handlechange}></TextField>
                <Button  endIcon={ isSignup ? <HowToRegIcon></HowToRegIcon> :<LoginIcon></LoginIcon>} variant='contained' color='warning' sx={{
                    marginTop:3,
                    borderRadius:3
                }} type='submit'>{isSignup?"Sign Up" : "Login" }</Button>
                  <Button  sx={{
                    marginTop:3,
                    borderRadius:3
                }} onClick={resetState}  
                > Change to {isSignup ? "Login" :"Sign up"} Hello from Anu</Button>
            </Box>
        </form>
    </div>
  )
}
