import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Main_context from '../context/main_context';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/conversion.css'

function Conversion() {

    let [base,setBase]=useState("");
    let [resSymbol,setSym]=useState("");
    let [to,setTo]=useState("");
    let [amount,setAmount]=useState(0);
    let [result,setResult]=useState(0);
    let {data}=useContext(Main_context);
    function handlebase(e){
      let val=e.target.value;
      // console.log(val);
      setBase(val);
    }
    function handleto(e){
      let val=e.target.value;
      // console.log(val);
      setTo(val);
      setSym(val);
    }
    function handleamount(e){
      let val=e.target.value;
      // console.log(val);
      setAmount(val);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        if(base=="" ){
          toast("enter the base currency",{
            position:"bottom-right"
          });
        }
        else if(to===""){
          toast.warn("enter currency you wish to convert!",{
            position:"bottom-right"
          })
        }
        else if(amount===0){
          toast.warn("enter amount",{
            position:"bottom-right"
          })
        }
        handleLogic(base,to,amount);
    }

    async function handleLogic(base,to,amount){
        let ans=await axios.get(`https://v6.exchangerate-api.com/v6/da4552089fd9d66926dc1181/latest/${base}`);
        console.log('ans',ans.data.conversion_rates[to]*amount)
        let res=ans.data.conversion_rates[to]*amount;
        setResult(res.toFixed(3));
    }
    
  
  return (
    <div className='form-main'>
        <form onSubmit={handleSubmit} className='form-act'>
            <label>Choose Base currency</label>
            <select name='bases_curr' onChange={handlebase}>
              <option value={null}></option>
            {
              Object.keys(data).map(key=>( 
                      <option key={key} value={key}>{key}</option> 
              ))
            }</select><br/>
            <label>Convert to </label>
            <select name='to_curr' onChange={handleto}>
            <option value={null}></option>
            {
              Object.keys(data).map(key=>(
                      <option key={key} value={key}>{key}</option>              
              ))
              

            }</select><br/>
            <label>Enter the amount</label>
            <input type='number' placeholder='amount' name='amount' onChange={handleamount}/>
            <input type='submit' className='button-29' value='enter'/>
           
        </form>
      <div className='result-div'>{resSymbol} {result}</div>
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
  )
}

export default Conversion
