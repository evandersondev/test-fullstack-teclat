import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  header {
    width: 100%;
    height: 60px;
    background: #0f024ecc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    span {
      width: auto;
      height: 100%;
      display: flex;
      align-items: center;
      color: #fff;

      h3 {
        margin-left: 7px;
        text-transform: uppercase;
      }
    }

    .navbar {
      display: flex;
      align-items: center;

      button:first-child {
        border: 0;
        width: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        border-radius: 7px;
        background: #56dd85;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.4s;

        &:hover {
          background: #34bb63;
        }

        span {
          margin-left: 5px;
        }
      }
    }

    button {
      border: 0;
      background: transparent;
      margin-left: 15px;
      cursor: pointer;

      svg {
        color: #fff;

        font-size: 22px;
      }
    }
  }

  section {
    width: 90%;
    max-width: 840px;

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 30px 0;

      tr {
        border-bottom: 2px solid #66666633;
      }

      th,
      td {
        height: 30px;
        padding: 15px 0;
        text-align: start;
      }

      th {
        font-size: 18px;
        letter-spacing: 1px;
      }

      .actions {
        width: 70px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          border: 0;
          background: transparent;
          color: #ff5733;
          cursor: pointer;
          transition: all 0.1s;

          &:hover {
            font-size: 15px;
          }
        }

        button:first-child {
          color: #3498db;
        }
      }
    }
  }

  .paginate {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: 75px;
      border: 1.3px solid #56dd85;
      border-radius: 7px;
      padding: 7px;
      color: #56dd85;
      font-weight: bold;
      background: transparent;
      cursor: pointer;
      transition: all 0.4s;

      &:hover {
        color: #fff;
        border-color: #fff;
        background: #34bb63;
      }
    }

    button[disabled] {
      opacity: 0.2;
      color: #fff;
      border-color: #fff;
      background: #34bb63;
      cursor: default;
      transition: none;
    }
  }
`;
