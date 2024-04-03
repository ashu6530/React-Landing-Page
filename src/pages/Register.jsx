
import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Register = () => {
  const registerForm = useRef(null)
  const {user,registerUser} =useAuth()
  const navigate=useNavigate()

  useEffect(()=>{
    if(user){
      return navigate('/')
    }
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    const name =registerForm.current.name.value
    const email =registerForm.current.email.value
    const password1 =registerForm.current.password1.value
    const password2 =registerForm.current.password2.value
    if(password1 !== password2){
      alert("Check Your Password !!")
      return 
    }
    const userInfo={name,email,password1,password2}            //conversion in object done
    registerUser(userInfo)                                       //sended to api
   
  
  }
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
        <form ref={registerForm} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 mb-2">Name:</label>
            <input
              id="name"
              required
              type="text"
              name="name"
              placeholder="Enter name..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 mb-2">Email:</label>
            <input
              id="email"
              required
              type="email"
              name="email"
              placeholder="Enter email..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password1" className="block text-gray-800 mb-2">Password:</label>
            <input
              id="password1"
              type="password"
              name="password1"
              placeholder="Enter password..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password2" className="block text-gray-800 mb-2">Confirm Password:</label>
            <input
              id="password2"
              type="password"
              name="password2"
              placeholder="Confirm password..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-gray-800">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-800">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register
