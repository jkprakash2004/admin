import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataVisible = () => {
    
    const [questions,setQuestions]=useState()
    const [options1,setOptions1]=useState()
    const [options2,setOptions2]=useState()
    const [options3,setOptions3]=useState()
    const [options4,setOptions4]=useState()
    const [answer,setAnswer]=useState()
    const True=[questions,options1,options2,options3,options4,answer].every(Boolean)
    const datas=JSON.parse(localStorage.getItem("questions")) || []
    const [items,setItems]=useState([])
    const handleClick=(e)=>{
      if (True){
        const id=datas.length?datas[datas.length -1].id+1:1
        const res={id:id,questions:questions,option:[options1,options2,options3,options4],correct:answer,DateTime:{
          Day:new Date().getDay(),
          Time:new Date().getHours()+"/"+new Date().getFullYear()
        }}
        const list=[...datas,res]
        console.log(list);
        localStorage.setItem("questions",JSON.stringify(list))
        setAnswer("")
        setOptions1("")
        setOptions2("")
        setOptions3("")
        setOptions4("")
        setQuestions("")
    }else{
        toast("please insert data")
    }
    }
  return (
    <div className='addData'>
        <span >
            <h1 style={{height:"40px"}}> Add Product Data</h1>

            </span>
            <hr/>
        <div className='forms'>
            
            <form>
                <div className='form-div'>
                <label>Enter Questions :</label><br></br>
                <input type='text' placeholder='Enter questions....' value={questions} onChange={(e)=>setQuestions(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Options 1:</label><br></br>
                <input type='text' placeholder='Enter optopns....' value={options1} onChange={(e)=>setOptions1(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Options 2:</label><br></br>
                <input type='text' placeholder='Enter options....' value={options2} onChange={(e)=>setOptions2(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Options 3:</label><br></br>
                <input placeholder='Enter optopns...' value={options3} onChange={(e)=>setOptions3(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Options 4:</label><br></br>
                <input type='text' placeholder='Enter options....' value={options4} onChange={(e)=>setOptions4(e.target.value)}/>
                </div>
                <div className='form-div'>
                <label>Enter Answer :</label><br></br>
                <input type='text' placeholder='Enter answer....' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
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

export default DataVisible


