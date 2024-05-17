import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const URL="https://jsonplaceholder.typicode.com/users"
const initialState={
    data:[],
    status:"idle",
    loading:false,
    error:null,
}

export const fetchData=createAsyncThunk
    ("users/fetchData",async()=>{    
        const response=await axios.get(URL);
            return response.data
    
})



export const posteSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        
     },
    extraReducers(builder){
        builder
        .addCase(fetchData.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status="successed"
            state.data=action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
            
        })
      
    }
})
//export const {postAdd}=posteSlice.actions
export const status=(state)=>state.users.status
export const selectAll=(state)=>state.users.users
export const error=(state)=>state.users.error
export default posteSlice.reducer