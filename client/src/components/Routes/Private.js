// Import necessary modules and components
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useUserAuth } from "../../context/UserAuthContext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";



export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const { user, logOut } = useUserAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  // Render the Outlet if authentication is successful, otherwise show Spinner
  return ok ? <Outlet /> : <Spinner />;
}
