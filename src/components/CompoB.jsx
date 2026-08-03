import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'
const CompoB = () => {
  console.log("CompoB is rendering");
//  const user = useContext(UserContext)
//   console.log(user)
   
    return (
    <div>
       <p>name: {user.name} </p>
      <p>email: {user.email} </p>
     <h1>hii</h1>
      {/* <input type="text"/> */}
    </div>
  )
}

export default CompoB
