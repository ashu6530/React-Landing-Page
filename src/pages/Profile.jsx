import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-blue-600 min-h-screen flex justify-center items-center">
      <div className="text-center px-8">
        <p className="text-gray-200 text-lg mb-8">
          Built with React, React Router DOM, and Appwrite. Utilizes Context API for state management and form handling for user registration.
        </p>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-white mb-4">React Router DOM</h2>
          <p className="text-lg text-white text-center">Used for client-side routing. Defines routes and navigation links.</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col justify-center items-center mt-6">
          <h2 className="text-3xl font-bold text-white mb-4">Appwrite Context API</h2>
          <p className="text-lg text-white text-center">Integrated with React Context API for user authentication and registration.</p>
        </div>
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col justify-center items-center mt-6">
          <h2 className="text-3xl font-bold text-white mb-4">Form and Registration Page</h2>
          <p className="text-lg text-white text-center">Implemented registration page with form for user registration.</p>
        </div>
      </div>
    </div>
  );
  

  
  
  
  
  
  
  
  
  
  
};

export default Profile;
