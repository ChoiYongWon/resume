import Link from "next/link";
import { LinkStyle } from "@/app/style.css";
import { EducationWrapperStyle, TitleStyle } from "./style.css";
import EducationCard from "./component/\bEducationCard";

type Props = {
  style?: any;
};

const Education = ({ style }: Props) => {
  return (
    <div className={EducationWrapperStyle} style={style}>
        <h2 className={TitleStyle}>Education</h2>
        <EducationCard
            style={{marginTop: "20px"}}
            title="계명대학교 컴퓨터공학과 학사" status="졸업 예정" day="2020. 03. ~ 2024. 8." host="계명대학교">
        </EducationCard>
        <EducationCard
            style={{marginTop: "30px"}}
            title="멋쟁이 사자처럼 11기" status="수료" day="2023. 03. ~ 2023. 12." host="멋쟁이 사자처럼(계명대학교)">
              <EducationCard.Content>6개월 동안 Git을 주제로 정기 스터디를 진행하여, 전달 능력 및 발표 역량 강화</EducationCard.Content>
        </EducationCard>
        <EducationCard
            style={{marginTop: "30px"}}
            title="메가존클라우드 디지털 인재 양성과정" status="수료" day="2023. 02. 07. ~ 2023. 03. 03." host="메가존클라우드 아이티 평생교육원">
              <EducationCard.Content>네트워크 및 AWS 클라우드 기술을 학습했으며, 우연한 발견 프로젝트를 진행하는 과정에서 AWS ECS 기반의 MSA 구축에 활용</EducationCard.Content>
        </EducationCard>
    </div>
  );
};

export default Education;
