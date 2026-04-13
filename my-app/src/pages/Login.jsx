import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const nav = useNavigate();

  // PASSWORD REGEX
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>/?]).{8,}$/;

  const handleLogin = () => {
    // USERNAME check
    if (!username) {
      setError("Username cannot be empty");
      return;
    }

    // PASSWORD empty
    if (!password) {
      setError("Password cannot be empty");
      return;
    }

    // PASSWORD rules
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 chars, include 1 uppercase letter, 1 number and 1 special character"
      );
      return;
    }

    // fake auth check (можеш да го махнеш после)
    if (username !== "admin" || password !== "Admin@123") {
      setError("Invalid username or password");
      return;
    }

    setError("");
    nav("/dashboard");
  };

  return (
    <div className="container">
      <div className={`card ${error ? "shake" : ""}`}>
        <h2>Login</h2>

        {/* ERROR MESSAGE */}
        {error && <div className="error">{error}</div>}

        {/* USERNAME */}
        <div className="field">
          <svg className="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
            <path fill="currentColor" d="M4 20a8 8 0 0 1 16 0" />
          </svg>

          <input
            className="input"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>

        {/* PASSWORD */}
        <div className="field">
          <svg className="icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"
            />
          </svg>

          <input
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>

        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}