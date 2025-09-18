import { CertificationWrapperStyle, TitleStyle } from "./style.css";
import CertificationCard from "./component/CertificationCard";

type Props = {
  style?: any;
};

const Certification = ({ style }: Props) => {
  return (
    <div className={CertificationWrapperStyle} style={style}>
      <h2 className={TitleStyle}>Certification</h2>
      <CertificationCard
        style={{ marginTop: "20px" }}
        title="TOEIC Speaking Test"
        day="2025. 08."
        content="AL (Speaking Score 160) | ETS"
      ></CertificationCard>
    </div>
  );
};

export default Certification;
