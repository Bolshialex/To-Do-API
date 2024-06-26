import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth() {
  const { auth } = useAuth();
  //checks if the user is authenticated else back to login
  return auth?.accessToken ? <Outlet /> : <Navigate to={"/"} replace />;
}

export default RequireAuth;
