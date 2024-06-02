import { ContentStyle, DividerStyle, ResumeLayoutStyle } from "./style.css";
import Introduce from "./section/Introduce";
import Project from "./section/project";
import Skill from "./section/skill";

export default function Home() {
  return (
    <div className={ResumeLayoutStyle}>
      <div className={ContentStyle}>
        <Introduce />
        <div className={DividerStyle} style={{ margin: "30px 0" }} />
        <Project />
        <div className={DividerStyle} style={{ margin: "30px 0" }} />
        <Skill />
      </div>
    </div>
  );
}
