import "./css/about.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export const About = () => {
  return (
    <div className="about">
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="about-me"
      >
        <span>Hello</span> <br />
        👋 I am <span className="charles">Charles Wambua</span>, a skilled full
        stack developer proficient in creating web applications, cross-platform
        mobile apps, and customized software using different tools and
        frameworks. My expertise also extends to process automation and
        developing embedded software for edge processing. Thank you. 💜
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="about-me">
        <img src="/mern2.png" alt="image" />
      </motion.div>
    </div>
  );
};
