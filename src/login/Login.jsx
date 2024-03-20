import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../components/Navigation";

function Login() {
  return (
    <>
      <div className="mami"  data-aos="fade-up" data-aos-duration={2000}>
        <Navigation />

        <form className="ap1">
          <h1 className="welcome">WELCOME TO WISDOM LIBRARY</h1><br/>
          <p className="please">Please enter your details</p>
          <br />

          <div className="input-container">
            <label> Email</label>

            <input type="email" required className="password" />
            <br />
            <label className="login-password">Password</label> 

            <input type="password" required className="password" />
            <br />
            <label className="login-password">confirm Password</label>        
            <input type="password" required className="password" />
            <br />

         {/* <span><input type="checkbox" id="checkbox" />Remember me
         <span className="login-span-1">Forgot password?</span></span> */}
          </div>
<Link to="/dashboard">
  <button className="loginbut">Log in</button>
</Link>
     <br />
          <p className="add">
            Don't have an account?
            <Link to="/signup" className="login-span-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;
