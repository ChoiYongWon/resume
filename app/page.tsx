import { ContentStyle, DividerStyle, ResumeLayoutStyle } from "./style.css";
import Introduce from "./section/Introduce";
import Project from "./section/project";
import Skill from "./section/skill";
import Award from "./section/award";
import Education from "./section/education";

export default function Home() {
  return (
    <div className={ResumeLayoutStyle}>
      <div className={ContentStyle}>
        <Introduce />
        <div className={DividerStyle} style={{ margin: "50px 0" }} />
        <Project />
        <div className={DividerStyle} style={{ margin: "50px 0" }} />
        <Skill />
        <div className={DividerStyle} style={{ margin: "50px 0" }} />
        <Award />
        <div className={DividerStyle} style={{ margin: "50px 0" }} />
        <Education />
      </div>
    </div>
  );
}
