import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import { getToken, saveToken } from "../Helper/useToken";
import { AllProducts } from "../Products/AllProducts";

function App() {
  const token = getToken();
  if (!token) {
    return <Login setToken={saveToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Dashboard />} />
            <Route path="/AllProducts" element={<AllProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
