import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["Home", "About", "Work", "Skills", "Testimonial", "Contact"].map(
        (el, i) => {
          return (
            <a
              href={`#${el}`}
              key={el + i}
              className="app__navigation-dot"
              style={active === el ? { backgroundColor: "#313BAC" } : {}}
            />
          );
        }
      )}
    </div>
  );
};

export default NavigationDots;
