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
        <h2 className={TitleStyle}>Project</h2>
        <ProjectCard 
            title="AT (A Spot Thur)"
            url="https://github.com/ChoiYongWon/AT"
            introduce="위치를 기반한 오프라인 취미활동에 재미를 더하고자 자신만의 장소를 기록하고 공유할 수 있는 서비스" 
            day="2024. 02. ~ 2024.05."
            tech={['nextjs', 'recoil', 'vanilla-extract', 'supabase', 'prisma', 'authjs', 'vercel']} 
            contributer={['개인']}
            style={{marginTop: "32px"}}>
                <ProjectCard.Content>Vercel의 이미지 최적화 비용이 비싸다고 판단하여 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_05.html#%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA-%E1%84%83%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5-feat-nextjs"}
                    className={LinkStyle}
                    target="_blank">다양한 해결방안</Link>을 모색중 Weserv를 통한 최적화 비용 절감 (추가 이미지 1000건당 $5 → 0원) 및 사용자 경험을 최적화하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>사용률이 저조할 때 접속 시 Vercel과 Supabase에서 ColdStart 이슈 발생, 패키지 경량화로 번들 크기 감소 및 AWS EventBridge와 Lambda를 사용하여 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_06.html#vercel-supabase-%E1%84%83%E1%85%B3%E1%86%BC-serverless-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB-%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-coldstart-%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B2-%E1%84%92%E1%85%A2%E1%84%80%E1%85%A7%E1%86%AF"}
                    className={LinkStyle}
                    target="_blank">초기 대기시간(TTFB)을 평균 1.4s에서 0.1s로 개선</Link>하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>코드 스플리팅을 활용해 번들 크기를 줄이는 과정에서, <Link
                    href={"https://til.rtolzo.dev/TIL/2024_03.html#servercomponent%E1%84%8B%E1%85%A6-%E1%84%83%E1%85%A2%E1%84%92%E1%85%A1%E1%86%AB-%E1%84%80%E1%85%A9%E1%84%8E%E1%85%A1%E1%86%AF-%E1%84%80%E1%85%A9%E1%84%86%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC"}
                    className={LinkStyle}
                    target="_blank">최상단 Component가 Client Component일 때 브라우저 최초 접속 시 참조값만 전달받는지</Link>에 대한 의문이 생겨 조사해보았습니다. 이 과정을 통해 NextJS의 Component 렌더링 방식을 더 잘 이해할 수 있었습니다.</ProjectCard.Content>
                <ProjectCard.Content>같은 URL에서 컴포넌트를 변환한 후 '뒤로 가기' 기능이 필요했습니다. 이를 위해 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_04.html#%E1%84%92%E1%85%A1%E1%84%82%E1%85%A1%E1%84%8B%E1%85%B4-%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-%E1%84%83%E1%85%B1%E1%84%85%E1%85%A9%E1%84%80%E1%85%A1%E1%84%80%E1%85%B5-%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB"}
                    className={LinkStyle}
                    target="_blank">History API를 활용하여 훅으로 구현</Link>하여 해결하였습니다.</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="우연한 발견" 
            url="https://github.com/choiyongwon/wooyeon-found"
            introduce="위치 기반 익명 SNS 서비스" 
            day="2022. 09. ~ 2023.06."
            tech={['nestjs', 'aws ecs', 'aws sqs', 'aws sns', 'aws rds']} 
            contributer={['협업', 'BE']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>AWS의 ECS와 사용하여 MSA 아키텍쳐를 설계하고 구축하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>Query 요청의 경우, AWS Service Connect를 통해 컨테이너들 사이의 직접적인 통신을 가능하게 했습니다. 반면, Mutation 요청에 대해서는 SQS와 SNS를 이용한 이벤트 기반 통신 방식을 채택하여 컨테이너 간 의존성을 낮춰 시스템의 안정성을 강화했습니다.</ProjectCard.Content>
                <ProjectCard.Content>MSA 특성상 여러 컨테이너가 존재하기 때문에, 특정 컨테이너에 의존하지 않는 JWT 인증 방식을 채택하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>FE와 BE의 URL을 논리적으로 분류하기 위해 서브도메인으로 구분지어 배포함으로써 <Link
                    href={"https://til.rtolzo.dev/TIL/2023_11.html#%E1%84%83%E1%85%A9%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB-dns-%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5"}
                    className={LinkStyle}
                    target="_blank">DNS에 대해서 더 자세히 이해</Link>할 수 있었습니다.
                </ProjectCard.Content>
                <ProjectCard.Content>다른 BE 팀원들이 이해하기 쉽도록, 제가 구축한 인프라를 <Link
                    href={"https://drive.google.com/file/d/1VPoKafFB9zmlCfqplaek6uoNy1H4xG0c"}
                    className={LinkStyle}
                    target="_blank">도식화</Link>해서 설명하였습니다. 이 경험을 통해 제 발표 능력과 소통 능력을 향상시킬 수 있었습니다.
                </ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="정용진 맛집 지도" 
            url="https://github.com/ChoiYongWon/jyj-map"
            introduce="신세계 정용진 부회장의 맛집 지도" 
            day="2022. 02. ~ 2022.03."
            tech={['nextjs', 'google analytics']} 
            contributer={['개인']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>수많은 컴포넌트를 대상으로 검색할 때 발생하는 버벅거림 이슈를 React.memo를 사용하여 리렌더링을 최소화함으로써 개선하였습니다.</ProjectCard.Content>
                <ProjectCard.Content>SEO 최적화를 통해 구글 검색 기준 1순위 기재하였습니다. 더불어 직관적인 UI 덕분에 유입이 증가하여, 누적 사용자 약 7천 명과 평균 MAU 300명을 달성하였습니다.</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="Vidalog" 
            url="https://github.com/ChoiYongWon/vidalog-client"
            introduce="인생(vida)을 기록(log)하는 웹 서비스" 
            day="2021. 06. ~ 2021.09."
            tech={['reactjs', 'storybook', 'recoil', 'styled-component', 'lambda', 'circleci', 'docker', 'nginx']} 
            contributer={['개인']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>AWS EC2, Docker, Nginx를 사용하여 무중단 배포 자동화를 구축하여, 개발 생산성을 높힐 수 있었습니다.</ProjectCard.Content>
                <ProjectCard.Content>트래픽에 비해 24시간 가동되는 EC2의 비용이 부담되어, 컴퓨팅 사용 시간에 따라 비용이 발생하는 Lambda로 옮겨 한 달 기준 약 13$의 비용을 절약할 수 있었습니다. 이 과정을 통해 다양한 배포 경험을 할 수 있었습니다.</ProjectCard.Content>
                <ProjectCard.Content>StoryBook을 사용해 UI를 독립적으로 테스트함으로써 컴포넌트의 상태를 실시간으로 확인할 수 있었습니다. 개발자 경험을 높힐 수 있었습니다.</ProjectCard.Content>
                <ProjectCard.Content>Github의 잔디 달력 UI을 직접 구현해보았습니다.</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="Yirang" 
            url="https://github.com/YirangDevs/Front"
            introduce="재가봉사 매칭 웹 서비스" 
            day="2020. 08. ~ 2021.02."
            tech={['reactjs', 'storybook', 'redux', 'styled-component', 'nginx']} 
            contributer={['협업', "FE"]}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>아토믹 디자인 패턴을 적용함으로써, FE 팀원들 간의 개발 일관성을 확보할 수 있었습니다.</ProjectCard.Content>
                <ProjectCard.Content>모든 컴포넌트를 최대한 재사용할 수 있도록 설계했으며, 이를 통해 UI 컴포넌트 라이브러리를 제작해보는 간접적 경험을 할 수 있었습니다.</ProjectCard.Content>
                <ProjectCard.Content>FE 팀원들 간의 실력 차이로 인한 낙오를 방지하기 위해 정기 회의 외에도 별도의 <Link
                    href={"https://drive.google.com/file/d/1ct7BrvXYrl8ryuiGGDu93xV341zjjOGL/view?usp=sharing"}
                    className={LinkStyle}
                    target="_blank">스터디 세션(자료)</Link>을 마련하여 진행함으로써 프로젝트를 성공적으로 마무리할 수 있었습니다.</ProjectCard.Content>
        </ProjectCard>
    </div>
  );
};

export default Project;
