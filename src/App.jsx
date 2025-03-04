
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoutes from './utils/PrivateRoute'
import { AuthProvider } from './utils/AuthContext'

function App() {

  return (
    <AuthProvider>
    <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          </Route>
          
        </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
