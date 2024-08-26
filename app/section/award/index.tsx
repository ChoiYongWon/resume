import Link from "next/link";
import { LinkStyle } from "@/app/style.css";
import AwardCard from "./component/AwardCard";
import { AwardWrapperStyle, TitleStyle } from "./style.css";

type Props = {
  style?: any;
};

const Award = ({ style }: Props) => {
  return (
    <div className={AwardWrapperStyle} style={style}>
        <h2 className={TitleStyle}>Award</h2>
        <AwardCard 
            style={{marginTop: "20px"}}
            title="IT’s DGB, IM Challenger 대한민국 디지털 인재 양성 프로젝트" awardType="Final Round 진출" day="2023. 06. 27." host="DGB 금융그룹"
        >
          <AwardCard.Content>'헬스케어 바탕의 IM# 내 새로운 간편결제 시스템' 주제에서 FE와 BE 개발 담당</AwardCard.Content>
          <AwardCard.Content>46개 팀이 참가한 대회에서 최종 4위 달성</AwardCard.Content>
        </AwardCard>
        <AwardCard 
            style={{marginTop: "30px"}}
            url="https://youtu.be/yBfBJfPdg8w"
            title="K-Digital Platform 데이터를 활용한 해커톤" awardType="최우수상" day="2022. 11. 05." host="경북대학교"
        >
          <AwardCard.Content>'골목 CCTV 데이터로 추출한 인구 밀집도를 기반으로 위험도를 분석하고, 지도를 통해 시각화하는 공공기관용 웹 애플리케이션' 주제에서 Kakao Maps API를 활용한 FE 지도 시각화 개발 담당</AwardCard.Content>
        </AwardCard>
        <AwardCard 
            style={{marginTop: "30px"}}
            title="글로벌 이노베이터 페스타(GIF) 경진대회" awardType="장려상" day="2022. 10. 28." host="대구디지털혁신진흥원"
        >
          <AwardCard.Content>'특정 위치에서 일어난 사건이나 이야기를 익명으로 공유할 수 있는 위치 기반 SNS 서비스' 주제의 <Link
                    href={"https://github.com/choiyongwon/wooyeon-found"}
                    className={LinkStyle}
                    target="_blank">'우연한 발견'</Link> 프로젝트에서 BE 및 FE 백 오피스 담당</AwardCard.Content>
        </AwardCard>
        <AwardCard 
            style={{marginTop: "30px"}}
            url="https://www.youtube.com/watch?v=77hECSw5dD4"
            title="대경권 SW산학프로젝트 경진대회" awardType="우수상" day="2022. 02. 10." host="경북대학교"
        >
          <AwardCard.Content>'원클릭 의료 이용 솔루션' 프로젝트의 FE 개발 및 사용자 인터페이스 구현 담당</AwardCard.Content>
        </AwardCard>
        <AwardCard 
            style={{marginTop: "30px"}}
            title="창의 소프트웨어 경진대회" awardType="대상" day="2022. 01. 19." host="계명대학교"
        />
    </div>
  );
};

export default Award;
