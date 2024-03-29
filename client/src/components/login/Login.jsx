import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Snackbar } from '@mui/material';
import './login.css'



const Login = ({setAuth}) => {
  const [method, setMethod] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage]   = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const fetchApi = async () => {
    
   const res = await fetch(`http://192.168.214.238:5002/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const data = (await res.json());
    console.log(data);

    if(data.status){
      localStorage.setItem("userData", JSON.stringify({
        username: username,
        password: password
      }))
      setMessage(data.reason);
      setOpen(true);
      setAuth(true);
      navigate("/post");
    }else{
      console.error(data.reason);
      setMessage(data.reason);
      setOpen(true)

    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  async function handleSubmit(e){
    e.preventDefault();
    await fetchApi();
  }
  return (
    <>
    <div className="login-container">
      <form onSubmit={(e)=>handleSubmit(e)} className="login-form">
        <input 
          type='text'
          placeholder='username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required/> 
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required/>
       
        <button
          onClick={()=>setMethod('login')}
        >
          LOGIN
        </button>
      </form>
    </div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
    </>
  )
}

export default Login