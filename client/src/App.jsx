import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login/Login';
import NavBar from './components/common/Navbar';
import Post from './components/post/Post'

const Account = ()=>{

  return (
  <h1>account</h1>
  )
}

const PrivateRouter = ()=>{
  return(<Route path='/post' element={<Post></Post>}></Route>)
}

const App = () => {
  const [auth, setAuth] = useState(false)
  useEffect(()=>{
    const isExist = localStorage.getItem("userData");
    if(isExist){
      setAuth(true)
    }else{
      setAuth(false)
    }
  })
  return (
    <>
    <NavBar auth={auth} setAuth={setAuth}/>
    <Routes>
      <Route path="/login" element={<Login setAuth={setAuth}></Login>} />
      
      {auth?
      <>
      
      <Route path='/post' element={<Post></Post>}></Route>
      <Route path='/account' element={<Account></Account>}></Route>
      </>
      :null
      }
    </Routes>
    </>
  )
}

export default App