import React from "react";
import {
  FooterStep1,
  FooterStep2,
  FooterStep3,
  FooterStep0,
} from "../../../styles/Footer.styled";
import { Link } from "react-router-dom";
import { map } from "lodash";
import Symbol from "../../../assets/svg/Symbol.svg";
import Social1Facebook from "../../../assets/svg/socila1Facebook.svg";
import Social2Twitter from "../../../assets/svg/social2Twitter.svg";
import Social3YouTube from "../../../assets/svg/social3YouTube.svg";
import Social4Instagram from "../../../assets/svg/social4Instagram.svg";
import { FooterLinkList } from "../Footer/FooterLinkList";

const Footer = () => {
  return (
    <>
      <FooterStep0>
        {map([1, 2, 3, 4, 5, 6], (_, index) => (
          <div key={index} />
        ))}
      </FooterStep0>
      <FooterStep1>
        {map(FooterLinkList, (linkList, index) => {
          const { title, subarray } = linkList;
          return (
            <div className="" key={index}>
              <p>{title}</p>
              <div className="footerLinkDiv" style={{ marginTop: "18px" }}>
                {map(subarray, (item, index) => (
                  <Link to="/" key={index}>
                    {item.link}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </FooterStep1>
      <FooterStep2>
        <div>
          <div>
            <Link to="/">
              <img src={Symbol} alt="" />
            </Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Work with Us</Link>
            <Link to="/">Advertise</Link>
            <Link to="/">Your Ad Choise</Link>
          </div>
        </div>
        <div>
          <a href="https://www.facebook.com/">
            <img src={Social1Facebook} alt="" />
          </a>
          <a href="https://twitter.com">
            <img src={Social2Twitter} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={Social3YouTube} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Social4Instagram} alt="" />
          </a>
        </div>
      </FooterStep2>
      <FooterStep3>
        <p>
          Universal’s business concept is to offer fashion and quality at the
          best price in a sustainable way. Universal has since it was founded in
          2015 grown into one of the world's leading fashion companies.
        </p>
        <p>© 2019 Universal UI Kit</p>
      </FooterStep3>
    </>
  );
};

export default Footer;
