import React from 'react'
import '../css/inr_rates.css'
import env from "react-dotenv";
import { useState,useEffect } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import Main_context from '../context/main_context';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaEuroSign ,FaPoundSign , FaDollarSign,FaYenSign } from "react-icons/fa";
function INR_Rates() {
  let [inr, setInr] = useState(0);
  let [pounds,setPounds]=useState(0);
  let [yen,setYen]=useState(0);
  let [aud,setAud]=useState(0);
  let [euro,setEuro]=useState(0);

  //accessing value from context store
  let {setData}=useContext(Main_context);
  let {data}=useContext(Main_context);

  async function api() {
   
    let ans = await axios.get(
      `https://v6.exchangerate-api.com/v6/da4552089fd9d66926dc1181/latest/USD`
    );
    console.log(ans.data.conversion_rates);
    setData(ans.data.conversion_rates);
    setInr(ans.data.conversion_rates.INR);
    setPounds(ans.data.conversion_rates.GBP);
    setYen(ans.data.conversion_rates.JPY);
    setAud(ans.data.conversion_rates.AUD);
    setEuro(ans.data.conversion_rates.EUR);
  }
  useEffect(()=>{api()},[]);
  return (
    <div className='inr-main'>
      <marquee className="marquee" behavior='alternate'><FaDollarSign /> today</marquee>
      <div className='sec1'>
          <div className='rupee'>INR<FaIndianRupeeSign />{inr}</div>
          <div className='euro'>EURO<FaEuroSign />{euro}</div>
          <div className='pound'>GBP<FaPoundSign />{pounds}</div>
      </div>
      <div className="sec2">
          <div className='aud'>AU<FaDollarSign />{aud}</div>
          <div className='yen'>YEN<FaYenSign />{yen}</div>
      </div>
      {console.log("ans",data)}
    </div>
  )
}

export default INR_Rates
