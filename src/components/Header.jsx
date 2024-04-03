
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
    const navigate = useNavigate()
    const {user,logoutUser} = useAuth()

    
    return (
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">LOGO.</Link>
            <div className="flex space-x-4">
              {user ? (
                <>
                  <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                  <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
                  <button onClick={logoutUser} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">Logout</button>
                </>
              ) : (
                <Link to="/login" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">Login</Link>
              )}
            </div>
          </div>
        </div>
      );
}

export default Header
