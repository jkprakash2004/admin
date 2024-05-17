import React, { useState } from 'react'
import "./stylesSub/form.css"
import { UseUserContext } from '../../Mainfunction/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddData = () => {
    const {data,setData}=UseUserContext()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [username,setUsername]=useState()
    const [city,setCity]=useState()
    const [staus,setStaus]=useState()
    const True=[name,email,username,city,staus].every(Boolean)
    const [genders,setGenders]=useState()
    
    
    const handleClick=(e)=>{
        e.preventDefault()
        if(True){
        const id=data.length?data[data.length -1].id+1:1    
        const list={id:id,name:name,username:username,email:email,genders:genders,city:city,staus:staus,Date:{
            time:new Date().getHours(),
            date:new Date().getDay()
        }}
        const listItem=[...data,list]
        setData(listItem)
        localStorage.setItem("addData",JSON.stringify(listItem))        
        setCity("")
        setEmail("")
        setName("")
        setStaus("")
        setUsername("")
        toast.success("Insert one data")
    }else{
        toast("please insert data")
    }
    }
  return (
    <div className='addData'>
        <span >
            <h1 style={{height:"50px"}}> Add Product Data</h1>

            </span>
            <hr/>
        <div className='forms'>
            
            <form>
                <div className='form-div'>
                <label>Enter Name :</label><br></br>
                <input type='text' placeholder='Enter name....' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Username :</label><br></br>
                <input type='text' placeholder='Enter username....' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Email :</label><br></br>
                <input type='email' placeholder='Enter email....' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Gender :</label><br></br>
                <select value={genders} onChange={(e)=>setGenders(e.target.value)} className='int'>
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                </div>                            
                <div className='form-div'>
                <label>Enter City :</label><br></br>
                <input type='text' placeholder='Enter city....' value={city} onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Mobile.no :</label><br></br>
                <input type='number' placeholder='Enter mobile....' value={staus} onChange={(e)=>setStaus(e.target.value)}/>
                </div>
                
            </form>
            <div className='btn'>
                    <button style={{background:"#b5c99a"}} onClick={handleClick}>Submit</button>
                    <button >Reset</button>
                </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default AddData


