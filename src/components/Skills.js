// import JavascriptIcon from '@mui/icons-material/Javascript';
import './css/skills.css'
export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="title">
        <h3>Skills</h3>
      </div>
      <div className="categories">
        <div className="containers">
          <h3>frontend</h3>reactjs,
        </div>
        <div className="containers">
          <h3>backend</h3>
          node,django
        </div>
        <div className="containers">
          <h3>Database</h3>
          mongo, mysql
        </div>
        <div className="containers">
          <h3>mbile apps</h3>
          react native
        </div>
        <div className="containers">
          <h3>dev ops</h3>
          docker
        </div>
        <div className="containers">
          <h3>machine learning</h3>
          tensoflow
        </div>
      </div>
    </div>
  );
};
