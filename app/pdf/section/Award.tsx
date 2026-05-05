import { View, Text, Link, StyleSheet } from '@react-pdf/renderer'
import { s } from '../styles'
import BulletItem from '../BulletItem'

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column' },
  card: { flexDirection: 'column', marginTop: 18 },
  header: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 6 },
  bulletList: { marginTop: 8 },
})

const AwardCard = ({ title, url, awardType, day, host, children }: any) => (
  <View style={styles.card} wrap={false}>
    <View style={styles.header}>
      {url
        ? <Link src={url} style={s.cardTitle}>{title}</Link>
        : <Text style={s.cardTitlePlain}>{title}</Text>
      }
      <Text style={s.badgeAccent}>{awardType}</Text>
    </View>
    <Text style={s.day}>{day}</Text>
    <Text style={s.host}>{host}</Text>
    {children && <View style={styles.bulletList}>{children}</View>}
  </View>
)

const AwardPDF = () => (
  <View style={styles.wrapper}>
    <Text style={s.sectionTitle}>Award</Text>

    <AwardCard
      title="IT's DGB, IM Challenger 대한민국 디지털 인재 양성 프로젝트"
      awardType="Final Round 진출"
      day="2023. 06. 27."
      host="DGB 금융그룹"
    >
      <BulletItem>'헬스케어 바탕의 IM# 내 새로운 간편결제 시스템' 주제에서 FE와 BE 개발 담당</BulletItem>
      <BulletItem>46개 팀이 참가한 대회에서 최종 4위 달성</BulletItem>
    </AwardCard>

    <AwardCard
      title="K-Digital Platform 데이터를 활용한 해커톤"
      url="https://youtu.be/yBfBJfPdg8w"
      awardType="최우수상"
      day="2022. 11. 05."
      host="경북대학교"
    >
      <BulletItem>'골목 CCTV 데이터로 추출한 인구 밀집도를 기반으로 위험도를 분석하고, 지도를 통해 시각화하는 공공기관용 웹 애플리케이션' 주제에서 Kakao Maps API를 활용한 FE 지도 시각화 개발 담당</BulletItem>
    </AwardCard>

    <AwardCard
      title="글로벌 이노베이터 페스타(GIF) 경진대회"
      awardType="장려상"
      day="2022. 10. 28."
      host="대구디지털혁신진흥원"
    >
      <BulletItem>
        {'\'특정 위치에서 일어난 사건이나 이야기를 익명으로 공유할 수 있는 위치 기반 SNS 서비스\' 주제의 '}
        <Link src="https://github.com/choiyongwon/wooyeon-found" style={s.link}>\'우연한 발견\'</Link>
        {' 프로젝트에서 BE 및 FE 백 오피스 담당'}
      </BulletItem>
    </AwardCard>

    <AwardCard
      title="대경권 SW산학프로젝트 경진대회"
      url="https://www.youtube.com/watch?v=77hECSw5dD4"
      awardType="우수상"
      day="2022. 02. 10."
      host="경북대학교"
    >
      <BulletItem>'원클릭 의료 이용 솔루션' 프로젝트의 FE 개발 및 사용자 인터페이스 구현 담당</BulletItem>
    </AwardCard>

    <AwardCard
      title="창의 소프트웨어 경진대회"
      awardType="대상"
      day="2022. 01. 19."
      host="계명대학교"
    />
  </View>
)

export default AwardPDF
