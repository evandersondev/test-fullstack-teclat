import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 38px;
    letter-spacing: 1.5px;
    color: #fff;
  }

  form {
    width: 95%;
    max-width: 500px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    padding: 30px;
    margin-top: 30px;
    box-shadow: 0 5px 10px #66666633;

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
  }
`;
