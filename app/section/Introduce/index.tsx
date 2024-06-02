import Link from "next/link";
import { IntroduceWrapperStyle, NameStyle, RoleStyle } from "./style.css";
import { LiStyle, LinkStyle, UlStyle } from "@/app/style.css";

type Props = {
  style?: any;
  className?: any;
};

const Introduce = ({ className, style }: Props) => {
  return (
    <div className={`${className} ${IntroduceWrapperStyle}`} style={style}>
      <h1 className={NameStyle}>최용원</h1>
      <span className={RoleStyle} style={{ marginTop: "4px" }}>
        프론트엔드 엔지니어 (산업기능요원)
      </span>
      <ul className={UlStyle} style={{ marginTop: "20px" }}>
        <li className={LiStyle}>
          사이드 프로젝트를 통해 아이디어를 실체화하는 것을 좋아하여, 현재 3개의
          서비스를 운영하고 있습니다.
        </li>
        <li className={LiStyle}>
          LightHouse SEO 지표를 약 1.5배 향상시켜 구글 검색결과를 1순위로 기재한
          경험이 있습니다.
        </li>
        <li className={LiStyle}>
          주워진 환경에서 최대한의 효율을 내려고 노력합니다. 이 과정에서
          점진적인 기술 도입을 통해 서비스 비용을 줄이고 사용자 경험을 개선한
          경험이 있습니다.
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
