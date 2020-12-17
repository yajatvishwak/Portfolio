import React from "react";
import { motion } from "framer-motion";
const FadeInDiv = ({ text, fontSize, bold, color, animationDelay }) => {
  return (
    <motion.div
      style={{
        fontFamily: "Montserrat Alternates",
        color: color !== undefined ? color : "#ececec",
        fontSize: fontSize !== undefined ? fontSize : 50,
        fontWeight: bold === true ? "bold" : "normal",
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, delay: animationDelay ? animationDelay : 0 }}
      variants={{
        hidden: { opacity: 0, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
    >
      {text}
    </motion.div>
  );
};

export default FadeInDiv;
