import Link from "next/link";
import {
  ContributorStyle,
  ContributorWrapperStyle,
  DayStyle,
  HeaderStyle,
  IntroduceStyle,
  NameStyle,
  ProjectStyle,
  SkillStyle,
  SkillWrapperStyle,
} from "./style.css";
import { LiStyle, UlStyle } from "@/app/style.css";

type Props = {
  style?: any;
  tech: string[];
  contributer: string[];
  url: string;
  day: string;
  title: string;
  introduce: string;
  children: any;
};

const ProjectCard = ({
  title,
  contributer,
  url,
  tech,
  day,
  introduce,
  style,
  children,
}: Props) => {
  return (
    <div className={ProjectStyle} style={style}>
      <div className={HeaderStyle}>
        <Link href={url} className={NameStyle} target="_blank">
          {title}
        </Link>
        <div className={ContributorWrapperStyle}>
          {contributer.map((data, i) => (
            <span key={i} className={ContributorStyle}>{data}</span>
          ))}
        </div>
      </div>
      <span className={DayStyle} style={{ marginTop: "4px" }}>
        {day}
      </span>
      <span className={IntroduceStyle} style={{ marginTop: "8px" }}>
        {introduce}
      </span>
      <div className={SkillWrapperStyle} style={{ marginTop: "8px" }}>
        {tech.map((data, i) => (
          <span key={i} className={SkillStyle}>{data}</span>
        ))}
      </div>
      <ul className={UlStyle} style={{ marginTop: "24px" }}>
        {children}
      </ul>
    </div>
  );
};

const Content = ({ children }: any) => {
  return <li className={LiStyle}>{children}</li>;
};

ProjectCard.Content = Content;

export default ProjectCard;
