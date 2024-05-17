import React, { useState } from 'react'
import { UseUserContext } from '../Mainfunction/Main'
import "./style.css"
import Products from "../compounds/Dasboard/Products"
import Login from '../compounds/Dasboard/Login'
import { Route,Routes } from 'react-router-dom'
import Dasboard from '../compounds/Dasboard/Dasboard'
import { RiMenu4Line } from "react-icons/ri";
import TestExcise from '../compounds/Dasboard/TestExcise'
import Calculator from '../compounds/Dasboard/Calculator'
import Pagination from '../compounds/Dasboard/Pagination'

const Routings = () => {
  const [show,setShow]=useState(false)

  const {name}=UseUserContext()
  return (
    <div className='route'>
      <div className='route-head'>
        <div>
          <h2>{name}</h2>
        </div>
        <div className='route-str'>
          <input type='search' placeholder='Search content....' className="str"/>
          <span className="i1" onClick={()=>setShow(!show)}></span>
          <span className='i2'><RiMenu4Line/></span>
          <div className={`pro-show ${show && "show-pro"}`}>
            <h3>Profiles</h3>
            <p>Data</p>
          </div>
        </div>
      </div>
      <div className='routing'>
      <Routes>
      <Route path='dasboard' element={<Dasboard/>}/> || <Route path='/' element={<Dasboard/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='todolist' element={<Products/>}/>        
        <Route path='testExcise' element={<TestExcise/>}/>        
        <Route path='calculator' element={<Calculator/>}/>        
        <Route path='pagination' element={<Pagination/>}/>        
        
      </Routes>
      </div>
    </div>
  )
}

export default Routings