import { View, Text, Link, StyleSheet } from '@react-pdf/renderer'
import { s } from '../styles'
import BulletItem from '../BulletItem'

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column' },
  header: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 },
  profileWrapper: { flexDirection: 'column' },
  name: { fontSize: 24, fontWeight: 700, color: '#222222' },
  role: { fontSize: 12, fontWeight: 300, color: '#222222', opacity: 0.5, marginTop: 3 },
  contactList: { flexDirection: 'column', alignItems: 'flex-end' },
  contact: { fontSize: 9, fontWeight: 300, color: '#222222', textDecoration: 'underline', marginBottom: 1.5 },
  bulletList: { marginTop: 20 },
})

const IntroducePDF = () => (
  <View style={styles.wrapper} wrap={false}>
    <View style={styles.header}>
      <View style={styles.profileWrapper}>
        <Text style={styles.name}>최용원</Text>
        <Text style={styles.role}>Frontend Engineer</Text>
      </View>
      <View style={styles.contactList}>
        <Link src="mailto:yongwon4130@gmail.com" style={styles.contact}>yongwon4130@gmail.com</Link>
        <Link src="https://github.com/ChoiYongWon" style={styles.contact}>github.com/ChoiYongWon</Link>
        <Link src="https://til.rtolzo.dev" style={styles.contact}>til.rtolzo.dev</Link>
      </View>
    </View>
    <View style={styles.bulletList}>
      <BulletItem>
        {'사이드 프로젝트를 통해 아이디어를 실체화하는 것을 좋아하며, 현재 '}
        <Link src="https://github.com/ChoiYongWon#on-service" style={s.link}>3개의 서비스를 운영</Link>
        {'하고 있습니다.'}
      </BulletItem>
      <BulletItem>
        주어진 환경에서 최대한의 효율을 내려고 노력합니다. 제한된 환경 내에서 비용을 최적화 한 경험이 다수 있습니다.
      </BulletItem>
      <BulletItem>
        근본적인 원리에 대한 이해를 바탕으로, 문제의 본질을 파악하고 해결책을 도출하는 것을 지향합니다.
      </BulletItem>
      <BulletItem>
        {'현재 React Specialist를 목표로 '}
        <Link src="https://github.com/ChoiYongWon/I-Dont-Know-React" style={s.link}>React의 전반적인 동작 과정을 정리</Link>
        {'하고 있습니다.'}
      </BulletItem>
    </View>
  </View>
)

export default IntroducePDF
