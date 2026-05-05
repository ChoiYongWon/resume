import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { s } from '../styles'
import BulletItem from '../BulletItem'

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column' },
  card: { flexDirection: 'column', marginTop: 18 },
  header: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 6 },
  bulletList: { marginTop: 8 },
})

const EducationCard = ({ title, status, day, host, children }: any) => (
  <View style={styles.card} wrap={false}>
    <View style={styles.header}>
      <Text style={s.cardTitlePlain}>{title}</Text>
      <Text style={s.badge}>{status}</Text>
    </View>
    <Text style={s.day}>{day}</Text>
    <Text style={s.host}>{host}</Text>
    {children && <View style={styles.bulletList}>{children}</View>}
  </View>
)

const EducationPDF = () => (
  <View style={styles.wrapper}>
    <Text style={s.sectionTitle}>Education</Text>

    <EducationCard
      title="계명대학교 컴퓨터공학과 학사"
      status="졸업"
      day="2020. 03. ~ 2024. 08."
      host="계명대학교"
    />

    <EducationCard
      title="멋쟁이 사자처럼 11기"
      status="수료"
      day="2023. 03. ~ 2023. 12."
      host="멋쟁이 사자처럼(계명대학교)"
    >
      <BulletItem>6개월 동안 Git 심화를 주제로 정기 스터디를 진행하여, 전달 능력 및 발표 역량 강화</BulletItem>
    </EducationCard>

    <EducationCard
      title="메가존클라우드 디지털 인재 양성과정"
      status="수료"
      day="2023. 02. 07. ~ 2023. 03. 03."
      host="메가존클라우드 아이티 평생교육원"
    >
      <BulletItem>네트워크 및 AWS 클라우드 기술을 학습했으며, 우연한 발견 프로젝트를 진행하는 과정에서 AWS ECS 기반의 MSA 구축에 활용</BulletItem>
    </EducationCard>
  </View>
)

export default EducationPDF
