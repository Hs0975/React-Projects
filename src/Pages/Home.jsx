import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate= useNavigate()
  const userName = JSON.parse(localStorage.getItem("info"))

function Loggingout(){
  localStorage.removeItem("loggedin")
navigate
('/login')
}


  return (
    <div style={{textAlign:'center', marginTop:"100px", fontFamily:"sans-serif",fontSize:"45px"}}>
    <div>
      <h1>Home</h1>
      <div>
        <h4 >welcome!<h1 style={{color:"green"}}>{ userName.name}</h1></h4>
      </div>
      <Button style={{background:'red'}} variant="contained" onClick={Loggingout}>LogOUt</Button>
    </div>
    </div>
  )
}

export default Home
