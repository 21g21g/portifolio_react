import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const telegramUrl = "https://t.me/@gcaey";
  const linkdlin = "https://www.linkedin.com/in/gebeyehu-assega-b04941258";

  return (
    <div className="socialMedia">
      <div className="footer">
        <FaFacebookF className="social-media" />
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
          {" "}
          <FaLinkedin className="social-media" />
        </a>

        <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
          <FaTelegram className="social-media" />
        </a>
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  );
};

export default Footer;
