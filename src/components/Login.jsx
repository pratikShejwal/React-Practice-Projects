import React, { useState } from 'react'
import { useAsyncError } from 'react-router-dom'
import {z} from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6,'password at least 6 char long'),
})


const Login = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const [error,setError] = useState({})
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  // const em = (e)=>{
  //     setEmail(e.target.value)
  // }
  // const ps = (e)=>{
  //     setPassword(e.target.value)
  // }

  const handler = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData,[name]:value})
  }

  const submit = (e)=>{
    e.preventDefault()
    // console.log(email);
    const result = loginSchema.safeParse(formData)
    console.log(formData);
    if (!result.success) {
      const errorField = result.error.formErrors.fieldErros
      setError(errorField)
      return
    }
    
  }

  return (
    <div>
      <h1>Login Page</h1>
<form onSubmit={submit}>  
      <input name='email' type="email" placeholder='enter email' value={formData.email} onChange={handler}/>
      <input name='password' type="password" placeholder='enter password'  value={formData.password} onChange={handler}/>
    <button>Login</button>
</form>
    </div>
  )
}

export default Login
