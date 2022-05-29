import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { AppWrap } from "../../wrapper";

const Header = () => {
  const scaleVariant = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-features_gradient-wrapper" role="region">
        <div
          className="app__header-features_gradient features_gradient-1"
          style={{
            opacity: false ? "0.5" : "0.4",
            backgroundColor: "var(--geist-cyan)",
          }}
        ></div>
        <div
          className="app__header-features_gradient features_gradient-2"
          style={{
            opacity: false ? "0.5" : "0.2",
            backgroundColor: "var(--geist-violet)",
          }}
        ></div>
        <div
          className="app__header-features_gradient features_gradient-3"
          style={{
            opacity: false ? "0.5" : "0.4",
            backgroundColor: "var(--geist-cyan)",
          }}
        ></div>
      </div>

      <motion.div whileInView={{ x: [-100, 0] }} transition={{ duration: 0.5 }}>
        <div className="app__header-badge">
          <span></span>

          <div style={{ marginLeft: 20, height: "300px" }}>
            <Typewriter
              options={{
                strings: ["Hi My Name is", "Devesh"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div className="tag-cmp app flex">
            <p className="p-text">Full Stack Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-img"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delaychildren: 0.5 }}
      >
        <img src={images.profile} alt="" />

        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="Profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.sass].map((el, i) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${i}`}>
              <img src={el} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "Home");
