import React from "react";

import { Container } from "./styles";

const NotFound = () => {
  const goBack = e => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <Container>
      <h1>4&#123;&#125;4</h1>
      <h2>page not found</h2>
      <p>
        Something went wrong click here to{" "}
        <button onClick={goBack}>BACK</button>
      </p>
    </Container>
  );
};

export default NotFound;
