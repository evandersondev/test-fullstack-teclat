import React, { useState } from "react";
import api from "../../services/api";

// Icons
import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

const FormEdit = ({ closeModal, userEdit }) => {
  const [myUser, setMyUser] = useState({
    name: userEdit.name,
    email: userEdit.email,
    password: userEdit.password
  });
  const [wishChangePassword, setWishChangePassword] = useState(false);

  const token = localStorage.getItem("token");

  const updateUser = async e => {
    e.preventDefault();
    const { _id } = userEdit;

    try {
      await api.put(
        `/users/${_id}`,
        {
          ...myUser
        },
        {
          headers: {
            authorization: "Bearer " + token
          }
        }
      );

      window.location.reload();
    } catch (err) {
      alert("Update user error!");
    }
  };

  return (
    <Container>
      <form onSubmit={updateUser}>
        <span>
          <FaTimes onClick={closeModal} />
        </span>
        <h1>Update user</h1>
        <input
          type="text"
          placeholder="Name"
          value={myUser.name}
          onChange={e => setMyUser({ ...myUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={myUser.email}
          onChange={e => setMyUser({ ...myUser, email: e.target.value })}
        />

        {wishChangePassword ? (
          <input
            type="password"
            onChange={e => {
              setMyUser({ ...myUser, password: e.target.value });
            }}
            placeholder="Password"
          />
        ) : (
          ""
        )}

        <button>Update user</button>

        <button
          onClick={e => {
            e.preventDefault();
            setWishChangePassword(true);
          }}
        >
          Do you wish to change the password?
        </button>
      </form>
    </Container>
  );
};

export default FormEdit;
