import "./login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  return (
    <div className="login-container">
      <div className="login-card">
            <h2>Login</h2>

          <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            />
           </div>

          <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
           />
          </div>
          
        <p className="signup-text">
         Already have an account?{" "}
          <a href="/signup">signup</a>
        </p>
      
        </div>
    </div>

   

  )
}

export default Login;