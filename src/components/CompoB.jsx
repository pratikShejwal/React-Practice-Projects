import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'
const CompoB = () => {
 const user = useContext(UserContext)
    return (
    <div>
       <p>name: </p>
      <p>email: </p>
    </div>
  )
}

export default CompoB
