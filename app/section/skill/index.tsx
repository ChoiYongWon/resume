import { LiStyle, UlStyle } from "@/app/style.css";
import Topic from "./component/Topic";
import { ProjectWrapperStyle, TitleStyle } from "./style.css";

type Props = {
  style?: any;
};

const Skill = ({ style }: Props) => {
  return (
    <div className={ProjectWrapperStyle} style={style}>
        <h2 className={TitleStyle}>Skill</h2>
        <Topic title="Frontend" style={{marginTop: "20px"}}>
          <ul className={UlStyle}>
            <li className={LiStyle}>NextJS, React, TypeScript 환경에 익숙합니다.</li>
            <li className={LiStyle}>React 생명주기를 이해하고 적절히 활용할 수 있습니다.</li>
            <li className={LiStyle}>React의 동작과정을 얕게 이해하고 있습니다.</li>
            <li className={LiStyle}>SSR의 원리를 이해하고 있으며 활용할 수 있습니다.</li>
            <li className={LiStyle}>브라우저가 렌더링하는 과정을 이해하고 있습니다.</li>
            <li className={LiStyle}>자바스크립트 동작 과정을 이해하고 있습니다.</li>
            <li className={LiStyle}>시맨틱 태그를 준수하는 것을 선호합니다.</li>
          </ul>
        </Topic>
        <Topic title="Backend" style={{marginTop: "30px"}}>
          <ul className={UlStyle}>
            <li className={LiStyle}>NestJS 환경을 선호합니다.</li>
            <li className={LiStyle}>Dependency Injection의 중요성을 이해하고 있습니다.</li>
            <li className={LiStyle}>Restful API를 적절히 설계하고 개발할 수 있습니다.</li>
          </ul>
        </Topic>
        <Topic title="Infra" style={{marginTop: "30px"}}>
          <ul className={UlStyle}>
            <li className={LiStyle}>AWS의 VPC 환경에 익숙합니다.</li>
            <li className={LiStyle}>DNS의 동작과정을 이해하고 Route53을 통해 도메인 및 서브도메인을 설정 및 관리할 수 있습니다.</li>
            {/* <li className={LiStyle}>S3의 액세스 정책을 유연하게 설정할 수 있습니다.</li> */}
          </ul>
        </Topic>
        <Topic title="Git" style={{marginTop: "30px"}}>
          <ul className={UlStyle}>
            <li className={LiStyle}>add, commit, push 등 기본적인 명령어를 다룰 수 있습니다.</li>
            <li className={LiStyle}>rebase와 merge의 차이점을 이해하고 있습니다.</li>
            <li className={LiStyle}>commit, tree, blob 개체에 대해 이해하고 있습니다.</li>
          </ul>
        </Topic>
        {/* 피드백 반영 (스킬 상세화) */}
        {/* <Topic title="Frontend" style={{marginTop: "20px"}}>
            <Topic.Skills list={["html5", "css3", "javascript(es6)", "typescript"]}/>
            <Topic.Skills list={["reactjs", "nextjs"]}/>
        </Topic>
        <Topic title="Backend" style={{marginTop: "30px"}}>
            <Topic.Skills list={["nestjs"]}/>
        </Topic>
        <Topic title="DevOps" style={{marginTop: "30px"}}>
            <Topic.Skills list={["ec2", "ecs", "lambda", "amplify"]}/>
            <Topic.Skills list={["s3", "rds"]}/>
            <Topic.Skills list={["route53", "vpc"]}/>
        </Topic> */}
    </div>
  );
};

export default Skill;
