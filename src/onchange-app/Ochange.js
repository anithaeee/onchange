import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import '../onchange-app/onchange.css';
import 'bootstrap/dist/css/bootstrap.css'; 
const Ochange = () => {
    const [inputValue, setInputValue] = useState("");
      const  handleInputChange = e=>{
        setInputValue(e.target.value);
      }
  return (
    <div className='container' style={{backgroundColor:'lightblue',height:'40rem',width:'80rem'}}> 
      <div className='card-text'>
         <h1 className='text' style={{textAlign:'center'}}>React App</h1>
      </div>
      <div className='inputtext'>
        <InputText value={inputValue} onChange={handleInputChange}></InputText>
      </div>
     </div>
  )
}

export default Ochange;