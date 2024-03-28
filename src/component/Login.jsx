import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {

const navigate = useNavigate()

  function clickHandler(e){
    e.preventDefault()
   const loggedUser = JSON.parse(localStorage.getItem("info")) //it convert the info  sting into object and get the item
    if(input.email===loggedUser.email && input.password===loggedUser.password){
      alert("User logged in successfully")
      localStorage.setItem("loggedin",true)
    navigate('/')
    }
    else{
alert("User Not found")
    }
  }


  const[input,setInput] = useState({
    email:'',
    password:''
  })
  


  return (
    
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginTop:'150px'}}>
      <h1>Login Here ! </h1>
      

<div>
<Box
      sx={{
        width: 300,
        maxWidth: '100%',
        marginBottom:'20px'
      }}
    >
      <TextField fullWidth label="Email" id="fullWidth" name='email' value={input.email}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
    </Box>
</div>

<div>
<Box
      sx={{
        width: 300,
        maxWidth: '100%',
        marginBottom:'20px'
      }}
    >
      <TextField fullWidth label="Password" id="fullWidth" name='password' value={input.password}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
    </Box>
</div>
<div style={{marginBottom:"20px"}}>
<Button variant="contained"  onClick={clickHandler}>Login</Button>
</div>
<div> <Link to="/signup">
  <u>New here create an account ?</u>
</Link></div>
</div>




  
  )
}

export default Login
