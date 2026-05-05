import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { s } from '../styles'

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column' },
  card: { flexDirection: 'column', marginTop: 14 },
})

const CertificationPDF = () => (
  <View style={styles.wrapper} wrap={false}>
    <Text style={s.sectionTitle}>Certification</Text>
    <View style={styles.card}>
      <Text style={s.cardTitlePlain}>TOEIC Speaking Test</Text>
      <Text style={s.host}>AL (Speaking Score 160) | ETS</Text>
      <Text style={s.day}>2025. 08.</Text>
    </View>
  </View>
)

export default CertificationPDF
