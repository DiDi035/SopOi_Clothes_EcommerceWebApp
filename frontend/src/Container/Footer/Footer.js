import React from "react";
import "./Footer.css";
import instagram from "../../assets/images/instagram-6-icon.svg";
import facebook from "../../assets/images/facebook-icon.svg";
import twitter from "../../assets/images/twitter-icon.svg";
import Link from "../../components/Link/Link";

const Footer = () => {
  return (
    <div className="footerCon">
      <div className="footerContent">
        <div className="footerTop">
          <div className="footerBrand"></div>
          <div className="nav-1">
            <Link fontSize="14px" color="greyish-two" linkTo="#">
              Home
            </Link>
            <Link fontSize="14px" color="greyish-two" linkTo="#">
              Products
            </Link>
            <Link fontSize="14px" color="greyish-two" linkTo="#">
              Services
            </Link>
            <Link fontSize="14px" color="greyish-two" linkTo="#">
              About us
            </Link>
            <Link fontSize="14px" color="greyish-two" linkTo="#">
              Help
            </Link>
            <Link fontSize="14px" color="greyish-two" linkTo="#">
              Contacts
            </Link>
          </div>
          <div className="social">
            <img src={twitter} className="socialIcon" />
            <img src={facebook} className="socialIcon" />
            <img src={instagram} className="socialIcon" />
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            height: "0.8px",
            opacity: "0.12",
            backgroundColor: "#202124",
          }}
        />
        <div className="footerBottom">
          <div className="nav-2">
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Home
            </Link>
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Products
            </Link>
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Services
            </Link>
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              About us
            </Link>
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Help
            </Link>
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Contacts
            </Link>
          </div>
          <div className="policy">
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Privacy Policy
            </Link>
            <Link fontSize="12px" color="greyish-two" linkTo="#">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
