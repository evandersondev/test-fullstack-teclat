import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #0f024ecc, #56dd85cc);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 15em;
    font-weight: bolder;
    color: #fff;
    letter-spacing: 10px;
    margin: 0;
  }
  h2 {
    font-size: 2.5em;
    color: #fff;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    color: #fff;
    button {
      text-decoration: none;
      color: #30b1d3;
      background: transparent;
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 16px;
      padding: 5px 10px;
      margin-left: 5px;
      border: 1px solid transparent;
      border-radius: 5px;
      transition: 0.2s ease-out;
      cursor: pointer;
      &:hover {
        border: 1px solid #30b1d3;
        color: #fff;
        background: #30b1d3;
      }
    }
  }
`;
