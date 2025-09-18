import Link from "next/link";
import { ExperienceWrapperStyle, TitleStyle } from "./style.css";
import { LinkStyle } from "@/app/style.css";
import ExperienceCard from "./component/ExperienceCard";

type Props = {
  style?: any;
};

const Experience = ({ style }: Props) => {
  return (
    <div className={ExperienceWrapperStyle} style={style}>
      <h2 className={TitleStyle}>Experience</h2>
      <ExperienceCard
        title="(주) 디웨일"
        url="https://welcome.clap.company/"
        introduce="성과 평가·피드백·목표 관리 등 HR SaaS 솔루션을 제공"
        day="2024. 10. ~ 현재 | Frontend Engineer"
        tech={[
          "next.js",
          "tanstack-query",
          "tailwind css",
          "mui",
          "recharts",
          "axios",
          "lodash",
        ]}
        style={{ marginTop: "32px" }}
      >
        <ExperienceCard.SubTitle>성능 및 DX 개선 TF</ExperienceCard.SubTitle>
        <ExperienceCard.Content>
          Virtualization POC: 약 48,000개의 목표 데이터 스크롤 환경에서 발생하는
          렌더링 지연 문제를 실험적으로 최적화. 스크롤 불가능한 수준에서 프레임
          처리 시간을 16.7ms(60fps) 수준으로 안정화, 원활한 사용자 경험 제공
        </ExperienceCard.Content>
        <ExperienceCard.Content>
          무한 스크롤 POC: API 요청 단위를 세분화하는 전략을 검증하여, 응답
          대기시간을 4초 → 200ms 이내로 단축 여부 확인
        </ExperienceCard.Content>
        <ExperienceCard.Content>
          서버 연산 비용이 크고 활용도가 낮은 대용량 필드를 제거하고 필요한
          데이터만 별도 경량 API로 분리하도록 제안 및 적용, 평균 응답 대기시간을
          40초에서 2초 이내로 최적화
        </ExperienceCard.Content>
        <ExperienceCard.Content>
          API 요청 파라미터 상태를 하나의 공통 훅으로 통합해 key-value 형태로
          관리하고, 검색어(query)가 변경되면 페이지(page)가 자동 초기화되는 등
          상태 간 연관 관계를 제어하며, 일부 필드에는 debounce 기능을 지원해
          DX를 개선
        </ExperienceCard.Content>
        <ExperienceCard.SubTitle>
          방사형 차트 커스텀 개발
        </ExperienceCard.SubTitle>
        <ExperienceCard.Content>
          기본 Recharts 방사형 차트가 제공하지 않는 2개의 X축 및 동적 Y좌표 계산
          기능을 삼각함수 기반으로 구현하여 평가 단위별 및 항목별 지표를 한
          화면에서 비교·분석할 수 있도록 시각화
        </ExperienceCard.Content>
        <ExperienceCard.SubTitle>
          Clap 서비스 운영 및 고도화
        </ExperienceCard.SubTitle>
        <ExperienceCard.Content>
          1:1 미팅, 평가, 차트 등 서비스 전반 모듈의 신규 기능 개발 및 기존 기능
          고도화를 통해 확장성과 사용자 경험 개선
        </ExperienceCard.Content>
        <ExperienceCard.SubTitle link={"https://youtu.be/6IlhhHEfXQo"}>
          사내 근태 관리 자동화(DwhaleWorks)
        </ExperienceCard.SubTitle>
        <ExperienceCard.Content>
          Slack 기반 출퇴근 기록 관리 시 매주 근무 시간을 수동으로 계산해야 하는
          비효율 발견
        </ExperienceCard.Content>
        <ExperienceCard.Content>
          전사 직원 대상 Slack 메시지 자동 수집·분석 대시보드 개발, 주별 근무
          시간·초과근무·휴식 시간 확인 및 엑셀 복사 기능 제공
        </ExperienceCard.Content>
        <ExperienceCard.Content>
          사내 전 직원이 사용하며 근태 관리 프로세스 효율성(근무 시간 산출
          과정을 평균 5분 → 3초 이내로 단축) 개선, 이후 오픈소스로 공개해 협업
          유지보수 진행
        </ExperienceCard.Content>
      </ExperienceCard>
    </div>
  );
};

export default Experience;
