import React, { useState } from 'react'
import "./styles/cal.css"
const Calculator = () => {
    const cal=[7,8,9,"*",4,5,6,"-",1,2,3,"+",",",0,".","="]
    const [int,setInt]=useState('')
    
  return (
    <div className='calculator'>
        <h2 style={{width:"100%",padding:"0px 10px",borderBottom:"1px solid #a1a1a1"}}>Calculator</h2>
        
        
        <div className='calc-box'>
            <input placeholder='000' value={int} className='str-cal'/>
                    
                    <div className='cal-list'>
                        <input value="Ac"  className='span' onClick={(e)=>setInt('')}/>                        
                        <input value="C"  className='span' onClick={(e)=>setInt(int.slice(0,-1))}/>                        
                        <input value="%"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="/"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                                                                    
                        <input value="1"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="2"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="3"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="+"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="4"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="5"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="6"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="-"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="7"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="8"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="9"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="*"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="."  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="0"  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value=","  className='span' onClick={(e)=>setInt(int + e.target.value)}/>                        
                        <input value="="  className='span' onClick={(e)=>setInt(eval(int))}/>                        
                    </div>
                    
                    
               
            
        </div>
    </div>
  )
}

export default Calculator