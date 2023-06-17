import "./css/home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="name">
        <div className="nm">
          
          I am <span className="n-n">Charles</span>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mtion"
      >
        <span className="mi-4">A </span>
        <TypeAnimation
          sequence={[
            "Software Developer",
            2000,
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
            "Full stack Developer",
            2000,
          ]}
          speed={50}
          className="text-accent"
          wrapper="span"
          repeat={Infinity}
        />
      </motion.div>
      <div>
        <button className="buttton">Contact ME</button>
      </div>
      <div className="links">
        <div class="social-icons">
          <a
            href="https://wa.me/254114652533"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/thatsme.charles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/Charles59676543"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Charles-Wambua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="switchbox">
        <label class="switch">
          <input type="checkbox" id="themeSwitch" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
};
