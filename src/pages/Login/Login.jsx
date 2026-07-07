import { useState } from "react";
import "./login.css";
import { login } from "../service/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  

  const payload = {
    username: email,
    password: password,
  };

  try {
    const response = await login(payload);
    console.log(response.data);
    localStorage.setItem('Token', response.data.token)
  } catch (error) {
    console.log(error);
  }
};
 
  return (

    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">User name</label>
            <input
              id="email"
              type="text"
              placeholder="Enter your name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default Login;