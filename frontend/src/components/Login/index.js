import React, { useState } from "react";
import history from "../../pages/history";

import { Container } from "./styles";

import api from "../../services/api";

const FormLogin = ({ makeSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginSession = async e => {
    e.preventDefault();

    if (email && password === "") return alert("Please fill in the fields.");

    try {
      const {
        data: { user, token }
      } = await api.post("/sessions", { email, password });

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      history.push("home");
    } catch (error) {
      return alert(
        "Maybe something information is incorrect, please check the email and password if they are correct."
      );
    }
  };

  return (
    <Container>
      <h1>Welcome</h1>
      <form onSubmit={LoginSession}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Log in</button>
        <span>
          <button onClick={makeSignup} href="#">
            Don't have account? Sing up.
          </button>
        </span>
      </form>
    </Container>
  );
};

export default FormLogin;
