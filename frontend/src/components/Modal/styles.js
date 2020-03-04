import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  animation: modal 0.5s;

  @keyframes modal {
    from {
      top: -800px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
