import React, { useState } from 'react'
import Data from '../../data'
import "./styles/page.css"
const Pagination = () => {
    const [currentPage,setCurrentPage]=useState(1)
    const [postPage,setPostPage]=useState(5)
    const pageFirstindex=currentPage*postPage
    const pageLastindex=pageFirstindex-postPage
    const datacurremtindex=Data.slice(pageLastindex,pageFirstindex)
    
    let postnumber=[]
    for(let i=1;i<Data.length / postPage;i++){
        postnumber.push(i)
    }    

    const handleClick=(e)=>{
        setCurrentPage(e)
    }
  return (
    <div className='pagination'>
        <h2>Pagination</h2>
        <hr/>
        <div className='page-list'>{datacurremtindex.map((e,index)=>{return(
            <div >
                <li className='page-des'>{e.id}. {e.des.slice(0,150)}.</li>
            </div>
        )})}</div>        
        <div className='page-btn'>
            {postnumber.map((e,index)=>{
                return(
                    <div >
                        <button onClick={()=>handleClick(e)} className='btn'>{e}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Pagination