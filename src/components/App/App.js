import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import {getToken, saveToken} from './useToken';


function App() {
    debugger;
    const token  = getToken();
    if(!token) {
      return <Login setToken={saveToken} />
    }
  
    return (
        <div className="wrapper">
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/Login" element={<Login />}/>                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;