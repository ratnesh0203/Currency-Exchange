import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CurrencyConverter from "../src/components/dashboard";
import Navbar from "./components/Navbar";
import INR_Rates from "./components/INR_Rates";
import Conversion from "./components/Conversion";
import Supported_curr from "./components/Supported_curr";
import Main_context_Provider from './context/Main_context_Provider'

function App() {
  return (
    <Main_context_Provider>
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<><CurrencyConverter /><INR_Rates/></>} />
        <Route path="supported_curr" element={<Supported_curr/>}/>
        <Route path="conversion" element={<Conversion />} />
      </Routes>
    </div>
    </Main_context_Provider>
  );
}

export default App;
