import React from 'react'
import "./App.css"
import Home from './homes/Home'
import { BrowserRouter } from 'react-router-dom'
import Routings from './homes/Routings'
import { DataShares } from './Mainfunction/Main'

const App = () => {
  return (
    <div className='app'>
      <DataShares>
      <BrowserRouter>
      <Home/> 
      <Routings/>
      
      </BrowserRouter>
      </DataShares>
    </div>
  )
}

export default App