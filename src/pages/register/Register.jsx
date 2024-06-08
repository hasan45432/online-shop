import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const FadeInSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
  });

  return (
    <animated.div ref={ref} style={fadeIn}>
      <div>Your content goes here</div>
    </animated.div>
  );
};

export default FadeInSection;
