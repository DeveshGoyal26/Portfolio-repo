import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  const about = [
    {
      title: "Full Stack Web Developer",
      description: "I am an aspiring Full Stack Developer",
      imageUrl: images.about01,
    },
    {
      title: "Backend Developer",
      description: "I am an aspiring Backend Developer",
      imageUrl: images.about02,
    },
    {
      title: "Frontend Developer",
      description: "I am an aspiring Frontend Developer",
      imageUrl: images.about03,
    },
    {
      title: "MEARN Stack",
      description: "I am an aspiring MEARN Stack Developer",
      imageUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> means{" "}
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {about.map((el, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={el.title + i}
          >
            <img src={el.imageUrl} alt={el.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {el.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {el.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
