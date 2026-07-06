import './signup.css'
import { useState } from 'react'

function Signup() {
  const [email, setEmail] = useState('')
  console.log(email);

  const [name, setName] = useState('')
  console.log(name);

  const [password, setPassword] = useState('')
  console.log(password);
  

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an account</h2>


        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(eve)=>setEmail(eve.target.value)}
          />
        </div>

    
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            onChange={(eve)=>setName(eve.target.value)}
          />
        </div>

    
        <div className="input-group">
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            onChange={(eve)=>setPassword(eve.target.value)}
          />
          </div>
    

        <button className="signup-btn">
          Create an account
        </button>

        
        <p className="login-text">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>

      </div>
    </div>
  );
};



export default Signup ;