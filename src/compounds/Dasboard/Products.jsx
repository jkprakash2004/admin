import React, { useState,useEffect } from 'react'
import { UseUserContext } from '../../Mainfunction/Main'
import "./styles/product.css"
import Data from '../../data'
import { motion } from 'framer-motion'
import AddData from '../SubCompounds/AddData'
import Load from '../SubCompounds/lodings/Lode'
import DataList from '../SubCompounds/DataList'
import { RiMenuFoldFill } from "react-icons/ri";
import DataVisible from '../SubCompounds/DataVisible'


const Products = () => {
  const [mins,setMins]=useState(false)
  
  const {name,data}=UseUserContext()
  const {close,add,value,text,file,viewTrue}=UseUserContext()
  const i=["Documents","AddData","Schema","Indexes","Validation"]
  const d=["Insert","Edit","Product","Setting","Profiles"]
  
       

console.log(Data);
  return (
    <div className='container-Product'>
        <div className='p'>
            <div className='name'>{text}</div>
            <div className='total'>
                <span>{data.length}</span>
            </div>
            </div>
    <div className='product-cat'>
        <ul>
             {i.map((e,index)=>{
                  return(
                  <motion.li key={index} onClick={()=>add(e,index)} className={`li ${index===value && "strs"}`}
                  initial={{opacity:0,scale:0,x:100}}
                  whileInView={{opacity:1,scale:1,x:0,zIndex:0}}
                  transition={{duration:index*0.3}}
                  >
                 {e}


                </motion.li>
                
          )
        })}
        </ul>
    <div className='icons'>
          <button className='menu'>
          <RiMenuFoldFill/>
          </button>
          <div className='position'>
          <button className={`btr ${mins && "tr"}`} onClick={()=>setMins(!mins)}>
          </button>
    </div>
    <div>
        <div className={`Add-list ${mins && "li"}`}>
           {d.map((e,index)=>{
            return(
              <motion.li key={index}
              initial={{opacity:0,}}
              whileInView={{opacity:1,}}
              transition={{duration:index*0.3}}
              >{e}</motion.li>
            )
            })}
    </div>
    </div>
  </div>
</div>
      
      
<div className='prodoct-list' >
            {text==="Documents"?<DataList close={close}/>:""}
            {text==="AddData"?<AddData/>:""}
          
      </div>
    
        
        {viewTrue && <DataVisible/>}
</div>
  )
}

export default Products

