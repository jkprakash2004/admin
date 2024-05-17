import React, { useEffect, useState } from 'react'
import "./styles/test.css"
import DataVisible from '../SubCompounds/DataVisible'
const TestExcise = () => {    
    const nav=["Home","Add Data"]
    const [classs,setClasss]=useState(0)
    const [value,setValue]=useState()
    const [text,setText]=useState("Home")
    const [corrects,setCorrects]=useState(0)
    const [wrong,setWrong]=useState(0)
    const [correctIndex,setCorrectIndex]=useState(0)
    const datas=JSON.parse(localStorage.getItem("questions")) || []
    const [show,setShow]=useState(false)    
    const [timer,setTimer]=useState(10)

    const correct=(e)=>{     
    setValue(e)
    }    

    useEffect(()=>{
    let interval;
    if(timer>0 && !show){
    interval=setInterval(()=>{
        setTimer((pre)=>pre-1)
    },2000)
    }else{
    clearInterval(interval)
    setShow(true)
    }   
    return()=>clearInterval(interval)
    },[timer,show])


    const Submits=()=>{
    if(value===datas[correctIndex].correct){
        setCorrects((pre)=>pre+1)        
        if(correctIndex<datas.length -1){
            setCorrectIndex((pre)=>pre+1)            
            setTimer(10)
        }else{
        setShow(true)
        }
    }else{
        setWrong((pre)=>pre+1)
        setCorrectIndex((pre)=>pre+1)            

    }
    }

    const handleClic=(e,index)=>{
        setClasss(index)
        setText(e)
    }

return (
    <div className='test-home'>
        <div className='test-title'>
            <h1>TestExcise</h1>            
        </div>
        <div className='test-nav'>
            {
                nav.map((e,index)=>{
                    return(
                        <span key={index} className={`list ${index==classs ?"test-cli":"test"}`} onClick={()=>handleClic(e,index)}>{e}</span>
                    )
                })
            }
            
        </div>
        {"Home"==text?(  <div className='main-box'>
        
        <div className='first-box'>            
        <div>
            
                
                    {show?(<div>No Questions</div>):(
                           <div className='questions-list'>                                                            
                        <h2><button>{datas[correctIndex].id}.</button>{datas[correctIndex].questions}</h2>
                            <span>{datas[correctIndex].option.map((e,index)=>{
                                return (
                                    <div className='options-list' key={index}>
                                    <input  type='radio' name='gender' onClick={()=>correct(e)} /><span>{e}</span>                                    
                                    </div>
                                )
                            })}</span>
                            <div className='questions-click'>
                                    <button>{timer}s</button>
                                    <button onClick={Submits}>Submit</button>
        </div>
        </div>)}                    
        </div>        
        </div>
        <div className='right-test'>
            <div>
                <h2>Total Questions ={datas.length}</h2>
                <h2 style={{color:"green"}}>Correct Answers = {corrects}</h2>
                <h2 style={{color:"red"}}>Wrong Answers = {wrong}</h2>
            </div>
            <div className='bottom-test'>
                <div className='correct-answer'></div>
            </div>
        </div>
        </div>):(<div>
            <DataVisible/>
        </div>)}
      
    </div>
  )
}

export default TestExcise