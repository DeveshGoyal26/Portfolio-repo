import React, { useRef, useState } from "react";
import "./Navbar.scss";
// import { images } from "../../constants";
import { motion, useCycle } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useDimensions } from "./useDimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 385px 31px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants1 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--main-secondary-color)"
    strokeLinecap="round"
    {...props}
  />
);

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
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
        {/* <HiMenuAlt4 onClick={() => setToggle(true)} /> */}
        {/* 
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <ul>
              <HiX onClick={() => setToggle(false)} />
              {["Home", "About", "Work", "Skills", "Contact"].map((el) => {
                return (
                  <li key={`link-${el}`}>
                    <a onClick={() => setToggle(false)} href={`#${el}`}>
                      {el}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div> */}

        <motion.div
          className="app__nav-motion-div"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={{
            width: isOpen ? "300px" : "0px",
            boxShadow: isOpen ? "0 0 20px hsl(0deg 0% 66% / 15%)" : "",
          }}
        >
          <motion.div className="background" variants={sidebar} />
          <motion.ul variants={variants1}>
            {["Home", "About", "Work", "Skills", "Contact"].map((el, i) => (
              <div key={`link-${el}`}>
                <motion.li
                  variants={variants2}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a onClick={() => toggleOpen()} href={`#${el}`}>
                    <div
                      className="text-placeholder"
                      style={{ border: `2px solid ${colors[i]}` }}
                    >
                      {el}
                    </div>
                  </a>
                </motion.li>
              </div>
            ))}
          </motion.ul>
          <button onClick={() => toggleOpen()}>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </motion.div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
