import React from 'react';
import {removeToken} from '../App/useToken';

export default function Dashboard() {
  return(
    <>
    <h2>Dashboard</h2>
    <button onClick={removeToken}>Logout</button>
    </>
  );
}