import { LiStyle, UlStyle } from "@/app/style.css";
import { AwardStyle, AwardTypeStyle, AwardTypeWrapperStyle, DayStyle, HeaderStyle, HostStyle, NameStyle } from "./style.css";

type Props = {
  style?: any;
  title: string;
  awardType: string;
  day: string;
  host: string;
  children?: any
};

const AwardCard = ({
  title,
  day,
  awardType,
  host,
  style,
  children
}: Props) => {
  return (
    <div className={AwardStyle} style={style}>
      <div className={HeaderStyle}>
        <span className={NameStyle}>{title}</span>
        <div className={AwardTypeWrapperStyle}>
            <span className={AwardTypeStyle}>{awardType}</span>
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

AwardCard.Content = Content;

export default AwardCard;
