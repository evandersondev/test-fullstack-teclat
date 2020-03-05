import React, { useState } from "react";

// Components
import Login from "../../components/Login";
import Signup from "../../components/Signup";

//Styles
import { Container } from "./styles";

const LoginLogout = () => {
  const [login, setLogin] = useState(true);

  const makeSignup = () => {
    setLogin(false);
  };

  const makeLogin = () => {
    setLogin(true);
  };

  return (
    <Container>
      {login ? (
        <Login makeSignup={makeSignup} />
      ) : (
        <Signup makeLogin={makeLogin} />
      )}
    </Container>
  );
};

export default LoginLogout;
