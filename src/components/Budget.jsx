import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
const Budget = () => {
  const {budget,dispatch} =useContext(AppContext);
  const [Budget,setBudget]=useState();

  return (
    <div>
      <h3>$ {budget}</h3>
      {/* <button onClick={()=>dispatch({type:"budget",payload:50000})}>change budget</button> */}
    </div>
  )
}

export default Budget
