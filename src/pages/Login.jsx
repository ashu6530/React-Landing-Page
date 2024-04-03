
import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const {user,loginUser} = useAuth()

  const loginForm = useRef(null)

  useEffect(()=>{
    if(user){
      return navigate('/')
    }
  })
  
  const handleSubmit=(e)=>{
  e.preventDefault()
  const email = loginForm.current.email.value                 //thats why I love useRef
  const password = loginForm.current.password.value
  const userInfo={email,password}                     //make sure to send the objects 
  loginUser(userInfo)                                  //here sended the info to authContext
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form ref={loginForm} onSubmit={handleSubmit}>
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
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-800 mb-2">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password..."
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-800">
          Don't have an account? <Link to="/register" className="text-indigo-600 hover:text-indigo-800">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login
