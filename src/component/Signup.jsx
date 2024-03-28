import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';
const Signup = () => {

const navigate = useNavigate()


function clickHandler(e){
  e.preventDefault()
  localStorage.setItem("info",JSON.stringify(input))
  alert("User created successfully")
  navigate('/login')
}


const[input,setInput] = useState({
  name:'',
  email:'',
  password:''
})

  return (
    
    <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginTop:'100px'}}>
      <h1>SignUp Here ! </h1>
      

<div>
<Box
      sx={{
        width: 300,
        maxWidth: '100%',
        marginBottom:'20px'
      }}
    >
      <TextField fullWidth label="Name" id="fullWidth"   name='name' value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
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
      <TextField fullWidth label="Email" id="fullWidth" name='email' value={input.email}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
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
      <TextField fullWidth label="Password" id="fullWidth" name='password'value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
    </Box>
</div>
<div style={{marginBottom:"20px"}}>
<Button variant="contained" onClick={clickHandler}>signup</Button>
</div>
<h4>have alerady an account ? <Link to ="/login">Login</Link></h4>

</div>




  
  )
}

export default Signup
