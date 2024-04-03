import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";

const PrivateRoutes = ()=>{
  const {user} = useAuth()
  return user ? <Outlet/> : <Navigate to='/login'/>
}
export default PrivateRoutes