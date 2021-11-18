import "./App.css";
import React from "react";
import HeHome from "./components/He_Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LoginComponents/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HeHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
