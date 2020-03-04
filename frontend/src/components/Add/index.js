import React, { useState } from "react";
import { createUser } from "../../utils/createUser";

import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

const Add = ({ closeModal }) => {
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
      <form onSubmit={handleSubmit}>
        <span>
          <FaTimes onClick={closeModal} />
        </span>
        <h1>Create account</h1>
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
        <button>Add user</button>
      </form>
    </Container>
  );
};

export default Add;
