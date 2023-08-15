import React from "react";
import ava from "../assets/logo.png";
import { AiFillInstagram, AiFillGithub,AiOutlineArrowUp } from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={ava} alt="founder" />
        <h2>Ankit Kumar</h2>
        <p>Never stop the Hardwork..</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.instagram.com/itz_ankitrajput/" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://www.github.com/ankit-lang/" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/ankit-rajput-hub/" target="blank">
            <FaLinkedin />
          </a>
          <a href="#home" className="arrow">
        <AiOutlineArrowUp />
      </a>
        </article>
        
      </aside>
    
    </footer>
  );
};

export default Footer;
