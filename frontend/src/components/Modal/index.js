import React from "react";

import { Container } from "./styles";

const Modal = props => {
  return <Container>{props.children}</Container>;
};

export default Modal;
