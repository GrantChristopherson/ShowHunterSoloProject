import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";



function LoginForm() {


  const dispatch = useDispatch();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  
  return (
    <div className="logInContainer">
      <div className="logInText">
        <form onSubmit={handleSubmit} className="form-group">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <h2>ShowHunt</h2>
          <h1>Sign In</h1>
            <label className="form">
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label className="form">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;