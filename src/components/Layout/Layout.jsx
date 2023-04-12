import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

import AdminNav from "../../admin/AdminNav";
import { useLocation, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase.config";

const Layout = () => {

  const location = useLocation()
  // const [email, setEmail] = useState('admin@example.com')
  // const [password, setPassword] = useState('password123')


  return (
    <>
      {
               location.pathname.startsWith("/dashboard") ? <AdminNav/> : <Header />
              
            }

      {/* {email === "admin@example.com" && password === "password123" ? (
        location.pathname.startsWith("/dashboard") ? (
          <AdminNav />
        ) : (
          <Header />
        )
      ) : (
        <p>Please enter valid credentials</p>
      )} */}




      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );


}



export default Layout;
