import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { s } from '../styles'
import BulletItem from '../BulletItem'

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column' },
  topic: { flexDirection: 'column', marginTop: 14 },
  topicTitle: { fontSize: 10, fontWeight: 500, color: '#222222', marginBottom: 6 },
  list: { flexDirection: 'column' },
})

const SkillPDF = () => (
  <View style={styles.wrapper} wrap={false}>
    <Text style={s.sectionTitle}>Skill</Text>
    <View style={styles.topic}>
      <Text style={styles.topicTitle}>Frontend</Text>
      <View style={styles.list}>
        <BulletItem>Next.js, React, TypeScript 환경에 익숙합니다.</BulletItem>
        <BulletItem>React의 Fiber 아키텍처를 이해하고 있으며, Render 및 Commit Phase의 세부 동작과정을 얕게 이해하고 있습니다.</BulletItem>
        <BulletItem>Next.js의 SSR 프로세스를 이해하고 있습니다. RSC Payload의 생성 과정, Hydration 과정을 설명할 수 있습니다.</BulletItem>
        <BulletItem>Critical Rendering Path의 주요 단계를 이해하고 웹 최적화에 적용할 수 있습니다.</BulletItem>
        <BulletItem>자바스크립트 동작 과정을 이해하고 있습니다.</BulletItem>
      </View>
    </View>
    <View style={[styles.topic, { marginTop: 18 }]}>
      <Text style={styles.topicTitle}>Git</Text>
      <View style={styles.list}>
        <BulletItem>add, commit, push 등 기본적인 명령어를 다룰 수 있습니다.</BulletItem>
        <BulletItem>rebase와 merge의 차이점을 이해하고 있습니다.</BulletItem>
        <BulletItem>commit, tree, blob 개체에 대해 이해하고 있습니다.</BulletItem>
      </View>
    </View>
  </View>
)

export default SkillPDF
