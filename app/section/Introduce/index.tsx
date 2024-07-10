import Link from "next/link";
import { ContactStyle, ContactWrapperStyle, HeaderStyle, IntroduceWrapperStyle, NameStyle, ProfileWrapperStyle, RoleStyle } from "./style.css";
import { LiStyle, LinkStyle, UlStyle } from "@/app/style.css";

type Props = {
  style?: any;
  className?: any;
};

const Introduce = ({ className, style }: Props) => {
  return (
    <div className={`${className} ${IntroduceWrapperStyle}`} style={style}>
      <div className={HeaderStyle}>
        <div className={ProfileWrapperStyle}>
          <h1 className={NameStyle}>최용원</h1>
          <span className={RoleStyle} style={{ marginTop: "4px" }}>
            Frontend Engineer 신입 (산업기능요원 보충역)
          </span>
        </div>
        
        <ul className={ContactWrapperStyle}>
          <li style={{ marginBottom: "2px" }}>
            <Link className={ContactStyle} href={"mailto:yongwon4130@gmail.com"}>yongwon4130@gmail.com</Link>
          </li>
          <li style={{ marginBottom: "2px" }}>
            <Link className={ContactStyle} href={"https://github.com/ChoiYongWon"} target="_blank">github.com/ChoiYongWon</Link>
          </li>
          <li style={{ marginBottom: "2px" }}>
            <Link className={ContactStyle} href={"https://til.rtolzo.dev"} target="_blank">til.rtolzo.dev</Link>
          </li>
        </ul>
      </div>
      
      <ul className={UlStyle} style={{ marginTop: "48px" }}>
        <li className={LiStyle}>
          애자일 프로세스를 통해 빠르게 아이디어를 실체화하는 것을 좋아하며, 현재 <Link
                    href={"https://github.com/ChoiYongWon#on-service"}
                    className={LinkStyle}
                    target="_blank">3개의 서비스를 운영</Link>하고 있습니다.
        </li>
        <li className={LiStyle}>
          주어진 환경에서 최대한의 효율을 내려고 노력합니다. 제한된 환경 내에서 비용을 최적화 한 경험이 다수 있습니다.
        </li>
        <li className={LiStyle}>
          함께 성장하는것을 중요하게 생각합니다. 구성원들에게 도움이 될만한 자료를 지속적으로 정리하고 공유하려고 노력합니다.
        </li>
        <li className={LiStyle}>
          기록을 통해 기억을 하고자 노력합니다. 이를 위해{" "}
          <Link
            href={"https://til.rtolzo.dev"}
            className={LinkStyle}
            target="_blank"
          >
            TIL(Today I Learned) 블로그
          </Link>
          에 자신만의 언어로 내용을 정리하고, 지속적으로 복습하면서 학습한
          내용을 기억합니다.
        </li>
      </ul>
    </div>
  );
};

export default Introduce;
