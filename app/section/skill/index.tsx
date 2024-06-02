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
            <Topic.Skills list={["html5", "css3", "js(es6)"]}/>
            <Topic.Skills list={["react", "nextjs"]}/>
            <Topic.Skills list={["vanilla-extract", "styled-components"]}/>
        </Topic>
        <Topic title="Backend" style={{marginTop: "30px"}}>
            <Topic.Skills list={["nestjs"]}/>
        </Topic>
        <Topic title="DevOps" style={{marginTop: "30px"}}>
            <Topic.Skills list={["ec2", "ecs", "lambda", "amplify"]}/>
            <Topic.Skills list={["s3", "rds"]}/>
            <Topic.Skills list={["route53", "vpc"]}/>
        </Topic>
    </div>
  );
};

export default Skill;
