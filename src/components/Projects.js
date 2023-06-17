import "./css/projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const Projects = () => {
  return (
    <div className="title">
      <h3>Projects</h3>

      <div className="projects" id="projects">
        < motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="project">
          <img src="/tensoflow.jpg" alt="image" />
          <span className="year">2020</span>
          <br />
          <span className="title">Tensoflow project</span>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="project">
          <img src="/tripwheels.PNG" alt="image" />
          <span className="year">2023</span> <br />
          {/* <span className="title">Efotball</span> */}
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="project">
          <img src="/efootball.jpg" alt="image" />
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
          className="project">
          <img src="/carhub.PNG" alt="image" />
        </motion.div>{" "}
      </div>
    </div>
  );
};
