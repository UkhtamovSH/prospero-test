import React from "react";
import styled from "styled-components";

const SubscribeNowSection = styled.div`
  padding: 60px 0 70px 0;
  text-align: center;
  p {
    font-family: "RobotoSlab-Bold", sans-serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    border: 1px solid var(base-grey-100);
  }
  input {
    border: 1px solid var(--base-grey-15);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px 15px;
    width: 313px;
    margin-right: 10px;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
  form {
    margin-top: 20px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    input {
      width: 100% !important;
    }
    p {
      font-size: 25px;
      line-height: 30px;
    }
    button {
      margin-top: 20px;
    }
  }
`;

const SubscribeNow = () => {
  return (
    <SubscribeNowSection>
      <p>Subscribe now and get 20% off</p>
      <form>
        <input type="text" placeholder="Enter your email" />
        <button className="btn btnBlue" type="submit">
          Subscribe
        </button>
      </form>
    </SubscribeNowSection>
  );
};

export default SubscribeNow;
