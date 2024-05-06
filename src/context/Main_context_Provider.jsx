import React, { useState } from 'react'
import Main_context from './main_context'
function Main_context_Provider({children}) {
  let [data,setData]=useState({});
  return (
   <Main_context.Provider value={{data,setData}} >
    {children}
   </Main_context.Provider>
  )
}

export default Main_context_Provider
