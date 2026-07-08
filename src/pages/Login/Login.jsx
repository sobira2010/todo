import { useState } from "react";
import "./login.css";
import Toast from "../../components/Toast";
import { login } from "../service/authService";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "info" });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      username: email,
      password: password,
    };

    try {
      const response = await login(payload);
      const responseData = response?.data;

      if (responseData?.success === false) {
        setToast({ message: responseData.message || "Login failed", type: "error" });
        return;
      }

      localStorage.setItem("Token", responseData?.token || "");
      setToast({ message: responseData?.message || "Login successful", type: "success" });
      navigate("/home");
    } catch (error) {
      const message = error?.response?.data?.message || error?.response?.data?.detail || "Invalid credentials";
      setToast({ message, type: "error" });
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

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />
    </div>
  );
}

export default Login;