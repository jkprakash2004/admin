import React, { useEffect, useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { UseUserContext } from '../Mainfunction/Main'

const Home = () => {

  const {click,cate,val,projectList}=UseUserContext()
const navList=["todoList","testExcise","calculator","pagination"]  

  return (
    <div className='home'>
      <div className='logo'
>
<h1>Shoping</h1>
      </div>
    <div className='category'>
      <div className='cat'>
        
        <input type='serch' placeholder='Search content' className="int" />

      </div>
      <ul>
        {cate.map((e,index)=>{
          return(
            
            <li key={index} onClick={()=>click(e,index)} className={`list ${index===val && "lis"}`}> <Link to={e} className="a">
              {e}
              </Link>  </li>
          )
        })}
      </ul>
      <div className='project-list'>
        <h2>Project List </h2>
        <hr/>
        {navList.map((e,index)=>{
          return(
            <div key={index}className='home-navList'> 
                  <li className='navList'><Link to={e} style={{textDecoration:"none",color:"inherit"}}>{e.toUpperCase()}</Link></li>
            </div>
          )
        })}                    
      </div>
      </div>
        

    </div>
  )
}

export default Home
