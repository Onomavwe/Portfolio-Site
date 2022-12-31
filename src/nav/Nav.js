import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from "react-icons/ai";
import { BiBookHeart } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";

export default function Nav() {
  return (
    <nav id='nav'>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
        <a href="#experience">
          <BiBookHeart />
        </a>
        <a href="#services">
          <RiServiceLine />
        </a>
        <a href="#projects">
          <AiFillProject />
        </a>
        <a href="#contact">
          <BiMessageSquareDetail />
        </a>
      </a>
    </nav>
  );
}
