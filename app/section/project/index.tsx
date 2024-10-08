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
            tech={['next.js', 'recoil', 'tanstack-query', 'vanilla-extract', 'supabase', 'prisma', 'authjs', 'vercel']} 
            contributer={['개인']}
            style={{marginTop: "32px"}}>
                <ProjectCard.Content>Next.js에서 Client 컴포넌트를 최대한 트리 하단으로 배치하여 SSR 과정에서 초기 렌더링 이후 요청되는 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_03.html#clientcomponent%E1%84%8B%E1%85%AA-servercomponent%E1%84%8B%E1%85%B4-%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-%E1%84%87%E1%85%A1%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8-feat-%E1%84%87%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF-%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA-1"}
                    className={LinkStyle}
                    target="_blank">Client JS 번들 파일 크기 최적화 (556kb에서 531kb로 약 5% 개선)</Link></ProjectCard.Content>
                <ProjectCard.Content>동일한 URL 내에서 지도 컴포넌트와 리스트 컴포넌트 간 전환을 브라우저 내비게이션을 통해 제어하고자 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_04.html#%E1%84%92%E1%85%A1%E1%84%82%E1%85%A1%E1%84%8B%E1%85%B4-%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-%E1%84%83%E1%85%B1%E1%84%85%E1%85%A9%E1%84%80%E1%85%A1%E1%84%80%E1%85%B5-%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB"}
                    className={LinkStyle}
                    target="_blank">History API를 활용한 상태관리 로직을 구현하여 커스텀 훅으로 제공</Link></ProjectCard.Content>
                <ProjectCard.Content>Tanstack Query의 queryKey 기능을 활용하여 검색 키워드 추가 및 제거 과정에서 발생하는 검색 결과를 캐싱하여 서버 부하 약 5배 감소</ProjectCard.Content>
                <ProjectCard.Content>Recoil의 중복 key문제를 해결하기 위해 RecoilRoot를 활용하여 컴포넌트 간 Boundary를 설정하여 독립적인 상태 관리 수행</ProjectCard.Content>
                <ProjectCard.Content>Vercel의 이미지 최적화 비용 절감을 위해 단계적으로 browser-image-compression과, Lambda를 통한 리사이징을 적용했으나, 사용자 경험 저하로 인해 최종적으로 Weserv를 도입하여 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_05.html#%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5-%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%AA-%E1%84%83%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%80%E1%85%B5-feat-nextjs"}
                    className={LinkStyle}
                    target="_blank">비용 100% 절감 및 사용자 경험 개선</Link></ProjectCard.Content>
                <ProjectCard.Content>사용률이 저조할 때 접속 시 지도 정보 로딩이 지연되는 ColdStart 이슈 발생. 패키지 경량화로 번들 크기 감소 및 Cron 작업을 통해 지속적인 요청을 발생시켜 서버를 Warm 상태로 유지함으로써 <Link
                    href={"https://til.rtolzo.dev/TIL/2024_06.html#vercel-supabase-%E1%84%83%E1%85%B3%E1%86%BC-serverless-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB-%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-coldstart-%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B2-%E1%84%92%E1%85%A2%E1%84%80%E1%85%A7%E1%86%AF"}
                    className={LinkStyle}
                    target="_blank">초기 대기시간(TTFB)을 평균 1.4s에서 0.1s로 개선</Link></ProjectCard.Content>
            
                {/* <ProjectCard.Content>예측 가능한 상태 구조를 위해 Recoil의 RecoilRoot를 활용하여 컴포넌트 간 독립적인 상태 관리를 수행</ProjectCard.Content> */}
        </ProjectCard>
        <ProjectCard 
            title="우연한 발견" 
            url="https://github.com/choiyongwon/wooyeon-found"
            introduce="특정 위치에서 일어난 사건이나 이야기를 익명으로 공유할 수 있는 위치 기반 SNS 서비스" 
            day="2022. 09. ~ 2023.06."
            tech={['nestjs', 'aws ecs', 'aws ecr', 'aws sns', 'aws sqs', 'aws rds']} 
            contributer={['협업', 'FE', 'BE']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>AWS의 ECS 기반으로 MSA 아키텍쳐를 설계하고 구축 및 사용자, 인증, 게시물 API 개발 등 프로젝트 전반 리딩 담당</ProjectCard.Content>
                <ProjectCard.Content>FE와 BE 간 반복적 소통 최소화를 위한 백오피스 관리 페이지 개발로 FE 개발 효율성 향상 및 데이터 검증 프로세스 간소화</ProjectCard.Content>
                <ProjectCard.Content>Mutation 요청 시 서비스 간 데이터 변경 사항을 반영하는 과정에서 서비스 다운으로 인한 데이터 유실 문제가 발생하여 이를 해결하고자 SQS와 SNS를 활용한 이벤트 기반 통신 방식을 채택. 서비스 다운 시에도 이벤트가 큐에 저장되어, 서비스 복구 후 큐의 이벤트를 처리함으로써 데이터 정합성 문제 해결</ProjectCard.Content>
                <ProjectCard.Content>FE와 BE 서버의 엔드포인트 주소를 논리적으로 분류하기 위해 <Link
                    href={"https://til.rtolzo.dev/TIL/2023_11.html#%E1%84%83%E1%85%A9%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B1%E1%84%92%E1%85%A1%E1%86%AB-dns-%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5"}
                    className={LinkStyle}
                    target="_blank">서브도메인으로 구분하여 배포</Link>
                </ProjectCard.Content>
                <ProjectCard.Content>팀원 간 기술 수준 격차와 제한된 시간 등의 제약 속에서 기술 부채를 최소화하는 것을 목표로 프로젝트를 진행하기 위해, 필요 기술과 변경된 인프라 환경을 주기적으로 <Link
                    href={"https://drive.google.com/drive/folders/1WI7A32RJqasMFK1-z9o9G2gJGd4H2XFm"}
                    className={LinkStyle}
                    target="_blank">시각화</Link>하여 공유 및 발표
                </ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="아띠 클라이밍" 
            url="https://github.com/ddolmengs/ahtty-readme"
            introduce="클라이밍장 소개 및 관리 페이지 (외주)" 
            day="2023. 07. ~ 2023.09."
            tech={['next.js', 'tailwind css', 'google analytics', 'aws s3']} 
            contributer={['협업', 'FE', 'BE']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>Google Analytics에서 수집한 사용자 위치, 성별, 방문 정보 등을 다양한 차트와 그래프로 시각화하여 보여주는 대시보드 페이지 개발</ProjectCard.Content>
                <ProjectCard.Content>SideBar 애니메이션에서 레이아웃 스레싱으로 인한 성능 저하 문제를 식별. CSS GPU 가속 프로퍼티를 활용하여 렌더링 효율성 개선</ProjectCard.Content>
                <ProjectCard.Content>AWS S3의 pre-signed URL을 활용한 이미지 업로드 시스템 구축. 이를 활용한  종합적인 이미지 관리 페이지 및 API 개발</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="정용진 맛집 지도" 
            url="https://github.com/ChoiYongWon/jyj-map"
            introduce="신세계 정용진 부회장이 추천하는 약 660여 개 맛집을 한눈에 확인할 수 있는 웹 서비스" 
            day="2022. 02. ~ 2022.03."
            tech={['next.js', 'styled-components', 'google analytics']} 
            contributer={['개인']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>수백 개의 맛집을 대상으로 검색할 때 불필요한 렌더링으로 인해 성능 저하 문제 발생. React.memo와 Throttle를 사용하여 리렌더링을 최소화함으로써 <Link
                    href={"https://til.rtolzo.dev/TIL/2022_03.html#%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%B5%E1%86%AB-%E1%84%86%E1%85%A1%E1%86%BA%E1%84%8C%E1%85%B5%E1%86%B8%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9-%E1%84%85%E1%85%A6%E1%86%AB%E1%84%83%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC-%E1%84%8E%E1%85%AC%E1%84%89%E1%85%A9%E1%84%92%E1%85%AA-%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AB"}
                    className={LinkStyle}
                    target="_blank">렌더링 성능 약 8배 개선</Link></ProjectCard.Content>
                <ProjectCard.Content>SEO 최적화를 통해 LightHouse 지표를 약 1.5배 향상시켜 구글 검색 순위 1위를 달성. 이 후 유입이 증가하여, 누적 사용자 약 7천 명과 MAU 300명을 기록</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="Vidalog" 
            url="https://github.com/ChoiYongWon/vidalog-client"
            introduce="Github의 잔디 달력과 Instagram의 스토리 달력을 결합하여 인생(vida)을 시각적으로 기록(log)하는 웹 서비스" 
            day="2021. 06. ~ 2021.09."
            tech={['react', 'recoil', 'styled-components', 'storybook', 'nestjs', 'aws lambda', 'docker', 'circleci', 'nginx']} 
            contributer={['개인']}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>이미지 업로드 시 최대 너비와 높이를 초과하면 리사이징하는 로직을 적용하여 이미지 로딩 시간 약 40% 절약</ProjectCard.Content>
                <ProjectCard.Content>Presentational & Container 패턴을 적용하여 비즈니스 로직을 분리</ProjectCard.Content>
                <ProjectCard.Content>StoryBook을 사용해 UI를 독립적으로 테스트하여 개발자 경험 및 안정성 개선</ProjectCard.Content>
                <ProjectCard.Content>Github의 잔디 달력 UI 및 Instagram 스토리 달력 UI 구현</ProjectCard.Content>
                <ProjectCard.Content>트래픽에 비해 24시간 가동되는 EC2의 비용이 부담되어, 컴퓨팅 사용 시간에 따라 비용이 발생하는 Lambda로 배포하여 한 달 기준 약 13$의 비용 절약</ProjectCard.Content>
        </ProjectCard>
        <ProjectCard 
            title="Yirang" 
            url="https://github.com/ChoiYongWon/Yirang"
            introduce="독거 노인을 위한 재가봉사 매칭 웹 서비스" 
            day="2020. 08. ~ 2021.02."
            tech={['react', 'storybook', 'react-redux', 'styled-components', 'nginx']} 
            contributer={['협업', "FE"]}
            style={{marginTop: "48px"}}>
                <ProjectCard.Content>홈과 로그인 페이지 개발 및 프로젝트 방향성을 주도하여 FE 리딩 담당</ProjectCard.Content>
                <ProjectCard.Content>아토믹 디자인 패턴 적용으로 FE 팀원 간 개발 일관성 보장 및 <Link
                    href={"https://github.com/YirangDevs/Front/tree/master/src/components/atoms"}
                    className={LinkStyle}
                    target="_blank">모든 컴포넌트가 재사용될 수 있도록 개발</Link></ProjectCard.Content>
                <ProjectCard.Content><Link
                    href={"https://github.com/YirangDevs/Front/blob/master/src/router/index.jsx"}
                    className={LinkStyle}
                    target="_blank">Route별로 인가 로직을 선언적으로 적용</Link>하여 권한별 접근 제어 구현</ProjectCard.Content>
                {/* <ProjectCard.Content>Redux가 생소한 팀원을 위해 <Link
                    href={"https://drive.google.com/file/d/1ct7BrvXYrl8ryuiGGDu93xV341zjjOGL/view"}
                    className={LinkStyle}
                    target="_blank">관련 자료를 정리하여 공유</Link>하였고, 이후 팀 전체가 동기화된 상태에서 도입</ProjectCard.Content> */}
                <ProjectCard.Content>프로젝트의 방향성을 유지하고 업무를 원활하게 진행하기 위해 8개월 동안 <Link
                href={"https://raspy-paperback-d3b.notion.site/0b4d82cd537640b28407549aee0eb7aa"}
                className={LinkStyle}
                target="_blank">스크럼 내용을 지속적으로 기록하고 공유</Link></ProjectCard.Content>
                    
        </ProjectCard>
    </div>
  );
};

export default Project;
