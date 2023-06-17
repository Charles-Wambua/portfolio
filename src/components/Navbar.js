import "./css/navbar.css";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { Link } from "react-scroll";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareText,
} from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="round-background">
        {" "}
        <Link  className="a"
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <BiHomeAlt />
        </Link>
      </div>

      <div className="round-background">
        <Link className="a"
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <BiHomeAlt />
        </Link>
      </div>

      <div className="round-background">
        <Link className="a"
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <BsClipboardData />
        </Link>
      </div>

      <div className="round-background">
        <Link className="a"
          to="skills"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <BsBriefcase />
        </Link>
      </div>

      <div className="round-background">
        <Link className="a"
          to="projects"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <BsChatSquare />
        </Link>
      </div>

      <div className="round-background">
        <Link className="a"
          to="fooer"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
        >
          <BiUser />
        </Link>
      </div>
    </div>
  );
};
