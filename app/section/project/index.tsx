import Link from "next/link";
import { ProjectWrapperStyle, TitleStyle } from "./style.css";
import { LinkStyle } from "@/app/style.css";
import ProjectCard from "./component/ProjectCard";

type Props = {
  style?: any;
};

const Project = ({ style }: Props) => {
  return (
    <div className={ProjectWrapperStyle} style={style}>
        <span className={TitleStyle}>Project</span>
        <ProjectCard 
            title="AT (A Spot Thur)"
            url="https://github.com/ChoiYongWon/AT"
            introduce="위치를 기반한 오프라인 취미활동에 재미를 더하고자 자신만의 장소를 기록하고 공유할 수 있는 서비스" 
            day="2024. 02. ~ 2024.05"
            tech={['nextjs', 'recoil', 'vanilla-extract', 'supabase', 'prisma', 'authjs', 'vercel']} 
            contributer={['개인']}
            style={{marginTop: "20px"}}>
                <ProjectCard.Content>Vercel의 이미지 최적화 비용이 비싸다고 판단하여 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_05.html#%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA-%E1%84%83%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5-feat-nextjs"}
                    className={LinkStyle}
                    target="_blank">다양한 해결방안</Link>을 모색중 Weserv를 통한 최적화 비용 절감 (추가 이미지 1000건당 $5 → 0원) 및 사용자 경험을 최적화하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>사용률이 저조할 때 접속 시 Vercel과 Supabase에서 ColdStart 이슈 발생, 패키지 경량화로 번들 크기 감소 및 AWS EventBridge와 Lambda를 사용하여 초기 대기시간(TTFB) 평균 2s에서 0.2s로 개선하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>NextJS와 Vercel 간의 여러 단계의 캐싱 시스템을 이해했습니다.</ProjectCard.Content>
                <ProjectCard.Content>같은 URL에서 컴포넌트를 변환한 후 '뒤로 가기' 기능이 필요했습니다. 이를 위해 History Stack을 사용하여 구현하였습니다.</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="우연한 발견" 
            url="https://github.com/wooyeonhan-inyeons/wooyeon-microservice"
            introduce="위치 기반 익명 SNS 서비스" 
            day="2022. 09. ~ 2023.06"
            tech={['nestjs', 'aws ecs', 'aws sqs', 'aws sns', 'aws rds']} 
            contributer={['협업', 'BE']}
            style={{marginTop: "45px"}}>
                <ProjectCard.Content>AWS의 ECS와 사용하여 MSA 아키텍쳐를 설계하고 구축하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>Query 요청은 AWS Service Connect를 사용하여 컨테이너 간의 직접적인 통신을 하도록 하였으며, Mutation 요청은 SQS와 SNS를 활용한 이벤트 기반 통신을 통해 컨테이너 간의 의존성을 줄였습니다.</ProjectCard.Content>
                <ProjectCard.Content>MSA 특성상 여러 컨테이너가 존재하기 때문에, 특정 컨테이너에 의존하지 않는 JWT 인증 방식을 채택하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>FE와 BE의 URL을 논리적으로 분류하기 위해 서브도메인으로 구분지어 배포함으로써<Link
                    href={"https://til.rtolzo.dev/TIL/2023_11.html#%E1%84%83%E1%85%A9%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB-dns-%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5"}
                    className={LinkStyle}
                    target="_blank">DNS에 대해서 더 자세히 이해</Link> 할 수 있었습니다.</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="정용진 맛집 지도" 
            url="https://github.com/ChoiYongWon/jyj-map"
            introduce="신세계 정용진 부회장의 맛집 지도" 
            day="2022. 02. ~ 2022.03"
            tech={['nextjs', 'google analytics']} 
            contributer={['개인']}
            style={{marginTop: "45px"}}>
                <ProjectCard.Content>수많은 컴포넌트를 대상으로 검색할 때 발생하는 버벅거림 이슈를 React.memo를 사용하여 리렌더링을 최소화함으로써 개선하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>SEO 최적화를 통해 구글 검색 기준 1순위 기재하였습니다. 더불어 직관적인 UI 덕분에 유입이 증가하여, 누적 사용자 약 7천 명과 평균 MAU 300명을 달성하였습니다.</ProjectCard.Content>
        </ProjectCard>
    </div>
  );
};

export default Project;
