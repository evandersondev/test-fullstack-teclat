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

  form {
    width: 95%;
    max-width: 500px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0 5px 20px #66666688;
    position: relative;

    span {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 24px;
      color: #66666688;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: #555555;
      }
    }

    h1 {
      margin-bottom: 30px;
    }

    input,
    button {
      width: 100%;
      margin-bottom: 15px;
      height: 40px;
      border-radius: 7px;
    }

    input {
      font-size: 15px;
      color: #434343;
      border: 1px solid #666666aa;
      padding: 0 30px;
    }

    button {
      border: none;
      background: #56dd85;
      color: #fff;
      font-weight: bold;
      font-size: 17px;
      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        background: #34bb63;
      }
    }

    span > button {
      border: none;
      background: transparent;
      font-size: 14px;
      color: #0f024eaa;
      font-weight: normal;
      margin-bottom: 0;

      &:hover {
        color: #0f024e;
        background: transparent;
      }
    }

    button:last-child {
      background: transparent;
      color: #666666aa;

      &:hover {
        color: #555555;
      }
    }
  }
`;
