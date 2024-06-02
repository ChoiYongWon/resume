import { LiStyle, UlStyle } from "@/app/style.css";
import { AwardStyle, DayStyle, HeaderStyle, HostStyle, NameStyle, StatusStyle, StatusWrapperStyle } from "./style.css";

type Props = {
  style?: any;
  title: string;
  status: string;
  day: string;
  host: string;
  children?: any
};

const EducationCard = ({
  title,
  day,
  status,
  host,
  style,
  children
}: Props) => {
  return (
    <div className={AwardStyle} style={style}>
      <div className={HeaderStyle}>
        <span className={NameStyle}>{title}</span>
        <div className={StatusWrapperStyle}>
            <span className={StatusStyle}>{status}</span>
        </div>
      </div>
      <span className={DayStyle} style={{ marginTop: "4px" }}>
        {day}
      </span>
      <span className={HostStyle} style={{ marginTop: "1px" }}>
        {host}
      </span>
      <ul className={UlStyle} style={{ marginTop: "12px" }}>
        {children}
      </ul>
    </div>
  );
};

const Content = ({ children }: any) => {
  return <li className={LiStyle}>{children}</li>;
};

EducationCard.Content = Content;

export default EducationCard;
