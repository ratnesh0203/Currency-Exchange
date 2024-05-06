import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/currency.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function dashboard() {
  useEffect(() => {
    toast.info('Welcome to Currency Exchange!',{
      position:"bottom-right"
    });
  }, []);
  return (
    <div className="main_container">
      <div className="dash-sec1">
        <h1 className="main-text">Discover the World's Currencies</h1>
        <h2 className="main-text"> Explore, Exchange, Empower</h2>
      </div>
      <button>
        <Link to="/conversion">Convert Currency</Link>
      </button>
      <ToastContainer 
        className="toast-position"
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
        
      />

    </div>
  );
}

export default dashboard;
