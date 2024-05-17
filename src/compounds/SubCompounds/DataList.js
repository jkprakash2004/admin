import React from 'react'
import "./stylesSub/dataList.css"
import { UseUserContext } from '../../Mainfunction/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DataList = () => {
    const {data,setData}=UseUserContext()
    
    const handleDelete=(id)=>{        
        const del=data.filter((e)=>e.id!==id)
        setData(del)
        localStorage.setItem("addData",JSON.stringify(del))        
        toast("Successfully delete")
    }
  return (
    <div className='pr'> 
        
        <div className='dataList'> 
        <tr className='th'>
                            <th>S.no</th>
                            <th>Name </th>
                            <th>Username</th>
                            <th>Email </th>
                            <th>Gender</th>
                            <th>City </th>
                            <th>Mobile no. </th>
                            <div className='th-btns'>
                                    <span>View</span>
                                    <span >Delete</span>
                                </div>
                        </tr>
            {!data.length?<div className='emty'>no data..</div>:data.map((e)=>{
                return(
                        <div className='data'>
                            <tr>
                                <td className='get-data'>{e.id}</td>
                                <td className='get-data'>{e.name}</td>
                                <td className='get-data'>{e.username}</td>
                                <td className='get-data'>{e.email.slice(0,10)}...</td>
                                <td className='get-data'>{e.genders}</td>
                                <td className='get-data'>{e.city}</td>
                                <td className='get-data'>{e.staus}</td>
                                
                            </tr>
                            <div className='btns'>
                                    <button >View</button>
                                    <button className='del' onClick={()=>handleDelete(e.id)}>Delete</button>
                                </div>
                        </div>
                )
            })}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default DataList