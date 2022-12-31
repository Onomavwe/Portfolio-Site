import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linked.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <SiFacebook />
      </a>
    </div>
  );
}
