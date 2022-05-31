import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.length &&
          abouts.map((el, i) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={el.title + i}
            >
              <img src={urlFor(el.imgUrl).url()} alt={el.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {el.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {el.description}
              </p>
              <div className="app__profile-container">
                <a
                  href="https://drive.google.com/file/d/18JbbrNoJ0_AOHadhqb0geMTLKCyk9nDc/view?usp=sharing"
                  download
                  className="app__profile-btn"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "About");
