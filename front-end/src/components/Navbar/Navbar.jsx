import React, { useState } from "react";
import "./Navbar.scss";
// import { images } from "../../constants";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <span>DG</span>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((el) => {
          return (
            <li className="app__flex p-text" key={`link-${el}`}>
              <div></div>
              <a href={`#${el}`}>{el}</a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <ul>
              <HiX onClick={() => setToggle(false)} />
              {["Home", "About", "Contact", "Work", "Skills"].map((el) => {
                return (
                  <li key={`link-${el}`}>
                    <a onClick={() => setToggle(false)} href={`#${el}`}>
                      {el}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
