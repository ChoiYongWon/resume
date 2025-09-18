import Link from "next/link";
import {
  ContributorStyle,
  ContributorWrapperStyle,
  DayStyle,
  HeaderStyle,
  IntroduceStyle,
  NameStyle,
  ExperienceStyle,
  SkillStyle,
  SkillWrapperStyle,
} from "./style.css";
import {
  LiStyle,
  SubTitleLinkStyle,
  SubTitleStyle,
  UlStyle,
} from "@/app/style.css";

type Props = {
  style?: any;
  tech: string[];
  url: string;
  day: string;
  title: string;
  introduce: string;
  children: any;
};

const ExperienceCard = ({
  title,
  url,
  tech,
  day,
  introduce,
  style,
  children,
}: Props) => {
  return (
    <div className={ExperienceStyle} style={style}>
      <div className={HeaderStyle}>
        <Link href={url} className={NameStyle} target="_blank">
          {title}
        </Link>
      </div>
      <span className={DayStyle} style={{ marginTop: "4px" }}>
        {day}
      </span>
      <span className={IntroduceStyle} style={{ marginTop: "8px" }}>
        {introduce}
      </span>
      <div className={SkillWrapperStyle} style={{ marginTop: "8px" }}>
        {tech.map((data, i) => (
          <span key={i} className={SkillStyle}>
            {data}
          </span>
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

const SubTitle = ({ children, link }: any) => {
  return (
    <div className={SubTitleStyle}>
      {link ? (
        <Link href={link} className={SubTitleLinkStyle} target="_blank">
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
};

ExperienceCard.Content = Content;
ExperienceCard.SubTitle = SubTitle;

export default ExperienceCard;
