
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await api.post("/auth/login", {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

  );
}