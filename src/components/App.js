import React, { useState } from "react";

const App = () => {
  const users = [
    { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
    { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
    { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" },
  ];

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = data;

    const user = users.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        console.log("Login successful!");
        setTimeout(() => {
          console.log("User data:", data);
        }, 3000);
        setError({ email: "", password: "" });
      } else {
        setError({ email: "", password: "Password Incorrect" });
      }
    } else {
      setError({ email: "User not found", password: "" });
    }
  }

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="input-email"
          onChange={handleChange}
        />
        <br />
        <p id="user-error" style={{ color: "red" }}>
          {error.email}
        </p>

        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="input-password"
          onChange={handleChange}
        />
        <br />
        <p id="password-error" style={{ color: "red" }}>
          {error.password}
        </p>

        <button id="submit-form-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
