import styled from "styled-components";
export const FooterStep0 = styled.div`
  display: flex;
  width: 100%;
  div {
    height: 5px;
    width: 100%;

    &:nth-child(1) {
      background-color: var(--red-red-75);
    }

    &:nth-child(2) {
      background-color: var(--purple-purple-75);
    }

    &:nth-child(3) {
      background-color: var(--blue-blue-75);
    }

    &:nth-child(4) {
      background-color: var(--orange-orange-75);
    }

    &:nth-child(5) {
      background-color: var(--green-green-75);
    }

    &:nth-child(6) {
      background-color: var(--greyBlue-greyBlue-75);
    }
  }
`;
export const FooterStep1 = styled.div`
  padding: 26px 0 48px 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));
  p {
    font-family: "Lato-Heavy", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: var(--base-grey-100);
  }
  .footerLinkDiv {
    a {
      display: block;
      font-family: "Lato-Regular", sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: var(--base-grey-85);
      text-decoration: none;
      margin-bottom: 15px;

      &:hover {
        color: var(--base-grey-50);
      }
    }
  }
`;
export const FooterStep2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0 30px 0;
  border-top: 1px solid var(--base-grey-15);
  align-items: center;

  @media only screen and (max-width: 992px) and (min-width: 320px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;

    & > div:nth-child(2) {
      img {
        margin-left: 0 !important;
        margin-right: 15px;
      }
    }
  }

  & > div > div {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 992px) and (min-width: 320px) {
      flex-direction: column;
      justify-content: start;
      align-items: start;

      a {
        margin-left: 0 !important;
        margin-bottom: 10px;
      }
    }
  }
  & > div:nth-child(2) {
    img {
      margin-left: 15px;
      cursor: pointer;
    }
  }
  & > div:nth-child(1) {
    a {
      font-family: "Lato-Heavy", sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: var(--base-grey-100);
      text-transform: uppercase;
      margin-left: 30px;
      text-decoration: none;
      &:nth-child(1) {
        margin-left: 0;
      }
      &:hover {
        color: var(--base-grey-50);
      }
    }
  }
`;

export const FooterStep3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 36px 0 50px 0;
  border-top: 1px solid var(--base-grey-15);
  p {
    font-family: "Lato-Regular", sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: var(--base-grey-50);
  }

  @media (max-width: 8000px) and (min-width: 1200px) {
    p {
      &:nth-child(1) {
        width: 770px;
        margin-right: 10px;
      }
      &:nth-child(2) {
        width: 200px;
        text-align: right;
      }
    }
  }

  @media only screen and (max-width: 1200px) and (min-width: 992px) {
    p {
      &:nth-child(1) {
        width: 770px;
        margin-right: 10px;
      }
      &:nth-child(2) {
        width: 200px;
        text-align: right;
      }
    }
  }

  @media only screen and (max-width: 992px) and (min-width: 320px) {
    flex-direction: column;
    justify-content: center;
    p {
      &:nth-child(2) {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
`;
