import { AwardStyle, AwardTypeStyle, AwardTypeWrapperStyle, DayStyle, HeaderStyle, HostStyle, NameStyle } from "./style.css";

type Props = {
  style?: any;
  title: string;
  awardType: string;
  day: string;
  host: string;
};

const AwardCard = ({
  title,
  day,
  awardType,
  host,
  style,
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
    </div>
  );
};

export default AwardCard;
