import { useContext,createContext, useState, useEffect } from "react";


export const userContext=createContext(null)

export  const DataShares=({children})=>{
    const [name,setName]=useState(JSON.stringify(localStorage.getItem("item")))
    
    const [text,setText]=useState("Documents")
    const [value,setValue]=useState(0)
    const [val,setVal]=useState(0)
    const cate=["Dasboard","Login"]
    const pojectList=["TodoList","Portofilio"]
    const [viewData,setViewData]=useState([])
    const [viewTrue,setViewTrue]=useState(false)
    const [file,setFile]=useState("Documents")
    const [userId,setUserId]=useState()
    const [data,setData]=useState(JSON.parse(localStorage.getItem("addData")) || [])
    const close=(id)=>{
        setViewTrue(!viewTrue)
        setUserId(id)
      }

    const add=(e,index)=>{
        setValue(index)
        setText(e)
        setFile(e)
        
    }
    const click=(e,index)=>{
        setVal(index)
        const num=index
        
        const i=e
        setName(e)
        
        
    }
    console.log(viewData);
    const Views=(e)=>{
        setViewData(e)
        setViewTrue(true)
    }
    
    return(
        <userContext.Provider value={{viewTrue,Views,name,setName,click,add,text,setText,value,setValue,cate,val,file,viewData,close,userId,data,setData ,pojectList}}>
            {children}
        </userContext.Provider>
    )
}

export const UseUserContext=()=>{
   const {name,setName,click,setText,Views,text,add,value,setValue,cate,val,file,viewData,viewTrue,close,userId,setData,data,projectList}=useContext(userContext)
      return {name,setName,click,setText,Views,text,add,value,setValue,cate,val,file,viewData,viewTrue,close,userId,setData,data,projectList}
}