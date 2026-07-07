import "./signup.css";
import { useState } from "react";
import { signup } from "../service/authService";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

const handleSignup = async (e) => {
  e.preventDefault();

  const payload = {
    username: name,
    email: email,
    password: password,
    password2: password,
    user_type: "employee", // അല്ലെങ്കിൽ "company"
  };

  try {
    const response = await signup(payload);
    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an account</h2>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Create an account
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;