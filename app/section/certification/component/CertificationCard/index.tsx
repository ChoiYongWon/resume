import { LiStyle, UlStyle } from "@/app/style.css";
import {
  AwardStyle,
  DayStyle,
  HeaderStyle,
  HostStyle,
  NameStyle,
} from "./style.css";

type Props = {
  style?: any;
  title: string;
  day: string;
  content: string;
};

const CertificationCard = ({ title, day, content, style }: Props) => {
  return (
    <div className={AwardStyle} style={style}>
      <div className={HeaderStyle}>
        <span className={NameStyle}>{title}</span>
      </div>
      <span className={HostStyle} style={{ marginTop: "1px" }}>
        {content}
      </span>
      <span className={DayStyle} style={{ marginTop: "4px" }}>
        {day}
      </span>
    </div>
  );
};

const Content = ({ children }: any) => {
  return <li className={LiStyle}>{children}</li>;
};

CertificationCard.Content = Content;

export default CertificationCard;
