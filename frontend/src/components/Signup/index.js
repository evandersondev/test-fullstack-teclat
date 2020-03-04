import React, { useState } from "react";
import { createUser } from "../../utils/createUser";

import { Container } from "./styles";

const FormLogin = ({ makeLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const handleSubmit = () => {
    createUser(name, email, password, passwordConfirm);
  };

  return (
    <Container>
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          onChange={e => {
            setPassword(e.target.value);
            setChangePassword(true);
          }}
        />
        {changePassword ? (
          <input
            type="password"
            placeholder="Comfirm password"
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
        ) : (
          ""
        )}
        <button>Log in</button>
        <span>
          <button onClick={makeLogin} href="#">
            Already account? Login here.
          </button>
        </span>
      </form>
    </Container>
  );
};

export default FormLogin;
