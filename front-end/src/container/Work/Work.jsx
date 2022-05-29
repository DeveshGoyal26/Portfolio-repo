import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type=="works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["React", "Next js", "Javascript", "Tailwind", "All"].map((el, i) => (
          <div
            key={i}
            onClick={() => handleWorkFilter(el)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === el ? "item-active" : ""
            }`}
          >
            {el}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delaychildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.length > 0 &&
          filterWork.map((el, i) => (
            <div className="app__work-item app__flex" key={i}>
              <div className="app__work-img app__flex">
                <img
                  // src={urlFor(el.imgUrl).url()}
                  alt={el.name}
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="app__work-hover app__flex"
                >
                  <a href={el.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={el.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{el.title}</h4>
                <p
                  className="p-text"
                  style={{ marginTop: 10, textAlign: "center" }}
                >
                  {el.description}
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{el.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "Work");
