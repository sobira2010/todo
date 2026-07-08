import "./signup.css";
import { useState } from "react";
import Toast from "../../components/Toast";
import { signup } from "../service/authService";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("employee");

  const [toast, setToast] = useState({
    message: "",
    type: "info",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      username: name,
      email: email,
      password: password,
      password2: password,
      user_type: userType,
    };

    try {
      const response = await signup(payload);
      const responseData = response?.data;

      if (responseData?.success === false) {
        setToast({
          message: responseData.message || "Signup failed",
          type: "error",
        });
        return;
      }

      setToast({
        message: responseData?.message || "Account created successfully",
        type: "success",
      });

      // Clear form
      setEmail("");
      setName("");
      setPassword("");
      setUserType("employee");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "Something went wrong";

      setToast({
        message,
        type: "error",
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>

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
            <label>User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="employee">Employee</option>
              <option value="company">Company</option>
            </select>
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
            Create an Account
          </button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />
    </div>
  );
}

export default Signup;