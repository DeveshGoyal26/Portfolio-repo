import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/devesh-goyal-8ab2b422b/">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/DeveshGoyal26">
        <AiFillGithub />
      </a>
      <a href="https://twitter.com/Devesh263">
        <BsTwitter />
      </a>
      <a href="https://www.facebook.com/devesh.goyal.5015/">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/devesh2623/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
