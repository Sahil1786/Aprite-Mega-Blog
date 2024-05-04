

import React,{ useState ,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from "./apprite/auth"
import {login,logout} from "./store/authSlice"

function App() {
// console.log(import.meta.env.VITE_APPWRITE_URL);

const [lodding,setlodding]=useState(false);
const dispatch=useDispatch()


useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if (userData) {
      dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=>setlodding(false))
},[])
return ! lodding ? <div className='min-h- screen  flex-wrap content-between bg-gray-400'  > test

</div>: null
}

export default App
