import { useState } from 'react'
import React from 'react'
import ListItems from './ListItems'

const Accordian = ({title,open,setOpen}) => {


const showList = ()=>{
  setOpen()
}
  return (
    <div>
      <h1>Gender</h1>
      <button onClick={
        showList
      }>Show</button>
     {open && <ListItems/>} 
    </div>
    
  )
}

export default Accordian
