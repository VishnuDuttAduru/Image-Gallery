import React, { useState } from 'react'
import Images from './components/Images'
import Navbar from './components/Navbar'
import './App.css'
import DefaultOption from './components/DefaultOption'
const App = () => {
  const [search,setSearch] = useState("");
  return (
    <div>
      <Navbar setValue={setSearch}/>
      <DefaultOption setValue={setSearch}/>
      <Images search={search}/>
    </div>
  )
}

export default App