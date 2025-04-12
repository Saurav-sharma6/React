import React, { useState } from 'react';
import './Css/LoginSignUp.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [agree, setAgree] = useState(false); // Checkbox state

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  const login = async () => {
    if (!agree) {
      alert("Please agree to the terms and privacy policy before continuing.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4001/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  const signup = async () => {
    if (!agree) {
      alert("Please agree to the terms and privacy policy before continuing.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4001/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("Login");
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Sign Up" && (
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={changeHandler}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={changeHandler}
          />
        </div>

        <div className="loginsignup-agree">
          <input
            type="checkbox"
            checked={agree}
            onChange={handleAgreeChange}
          />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        <button
          onClick={state === "Login" ? login : signup}
          disabled={!agree}
          style={{ opacity: agree ? 1 : 0.6, cursor: agree ? 'pointer' : 'not-allowed' }}
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className='loginsignup-login'>
            Already have an account?
            <span onClick={() => setState("Login")}> Login Here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an Account
            <span onClick={() => setState("Sign Up")}> Click Here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
