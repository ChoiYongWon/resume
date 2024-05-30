import { ContentStyle, DividerStyle, ResumeLayoutStyle } from "./style.css";
import Introduce from "./section/Introduce";

export default function Home() {
  return (
    <div className={ResumeLayoutStyle}>
      <div className={ContentStyle}>
        <Introduce />
        <div className={DividerStyle} style={{ margin: "30px 0" }} />
      </div>
    </div>
  );
}
