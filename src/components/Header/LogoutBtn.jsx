import React from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import authService from '../../apprite/Config';
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
      <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler} > Logout</button>
    );
}

export default LogoutBtn;
