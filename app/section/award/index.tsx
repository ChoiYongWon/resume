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
        <span className={TitleStyle}>Award</span>
        <AwardCard 
            style={{marginTop: "20px"}}
            title="IT’s DGB, IM Challenger 대한민국 디지털 인재 양성 프로젝트" awardType="Final Round 진출" day="2023. 06. 27." host="DGB 금융그룹"
        />
        <AwardCard 
            style={{marginTop: "30px"}}
            title="K-Digital Platform 데이터를 활용한 해커톤" awardType="최우수상" day="2022. 11. 05." host="경북대학교"
        />
        <AwardCard 
            style={{marginTop: "30px"}}
            title="2022년 글로벌 이노베이터 페스타(GIF) 경진대회" awardType="장려상" day="2022. 10. 28." host="대구디지털혁신진흥원"
        />
        <AwardCard 
            style={{marginTop: "30px"}}
            title="대경권 SW산학프로젝트 경진대회" awardType="우수상" day="2022. 02. 10." host="경북대학교"
        />
        <AwardCard 
            style={{marginTop: "30px"}}
            title="창의 소프트웨어 경진대회" awardType="대상" day="2022. 01. 19." host="계명대학교"
        />
    </div>
  );
};

export default Award;
