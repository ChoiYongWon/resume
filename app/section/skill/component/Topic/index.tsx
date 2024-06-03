import DotImage from "../../../../../public/svg/list.svg"
import Image from "next/image";
import { DotWrapperStyle, SkillLineWrapperStyle, SkillStyle, SkillWrapperStyle, SkillsWrapperStyle, TopicTitleStyle, TopicWrapperStyle } from "./style.css";

type Props = {
  style?: any;
  title: string;
  children: any;
};

const Topic = ({
  title,
  style,
  children,
}: Props) => {
  return (
    <div className={TopicWrapperStyle} style={style}>
      <span className={TopicTitleStyle}>{title}</span>
      <div className={SkillsWrapperStyle}>
        {children}
      </div>
    </div>
  );
};

type SkillsProps = {
  list: string[]
  style?: any
}

const Skills = ({list, style }: SkillsProps) => {
  return (
    <div style={style} className={SkillLineWrapperStyle}>
      <div className={DotWrapperStyle}>
        <Image src={DotImage} alt="" className={DotImage}/>
      </div>
      
      <div className={SkillWrapperStyle}>
        {
          list.map((data, i)=>{
            return (
              <span key={i} className={SkillStyle}>{data}</span>
            )
          })
        }
      </div>
    </div>
  );
};

Topic.Skills = Skills

export default Topic;
