import React from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import '../onchange-app/onchange.css';
import 'bootstrap/dist/css/bootstrap.css'; 
const Ochange = () => {
    const [inputValue, setInputValue] = useState("");
    const [data,setdata] = useState([]);
      const  handleInputChange = (e)=>{
        let val1= data;
        val1.push({
          name:e
        })
        setdata(val1);
        console.log(val1,"data");
      }
  return (
    <div className='container' style={{backgroundColor:'lightblue',height:'40rem',width:'80rem'}}> 
      <div className='card-text'>
         <h2 className='text' style={{textAlign:'center'}}>React App</h2>
      </div>
      <div className='inputtext'>
        <InputText value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></InputText>
        <Button style={{borderRadius:'3px',padding:'2px'}} onClick={()=>{handleInputChange(inputValue)}}>Add</Button>
      </div>
     </div>
  )
}

export default Ochange;