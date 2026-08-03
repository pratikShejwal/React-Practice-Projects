import React, { useState } from 'react'
import Accordian from './Accordian'
import ListItems from './ListItems'

const Men = () => {
  const [open, setOpen] = useState(0)
  
  return (
    <div>
      <h1>Men Page</h1>
      <h1>Filter options</h1>
{
[1,2,3,4].map((title,index) => 
 <Accordian key={index} title={title}
  open={index === open? true:false} 
  setOpen={()=> setOpen(index)}/> 
)
   
}
    {/* <Accordian/>
    <Accordian/> */}
    {/* <ListItems/> */}
    </div>
  )
}

export default Men
