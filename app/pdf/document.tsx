import { Document, Page, View, StyleSheet } from '@react-pdf/renderer'
import IntroducePDF from './section/Introduce'
import ExperiencePDF from './section/Experience'
import ProjectPDF from './section/Project'
import SkillPDF from './section/Skill'
import AwardPDF from './section/Award'
import EducationPDF from './section/Education'
import CertificationPDF from './section/Certification'
import { s } from './styles'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Pretendard',
    fontSize: 10,
    color: '#222222',
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
})

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <IntroducePDF />
      <View style={s.divider} />
      <ExperiencePDF />
      <View style={s.divider} />
      <ProjectPDF />
      <View style={s.divider} />
      <SkillPDF />
      <View style={s.divider} />
      <AwardPDF />
      <View style={s.divider} />
      <EducationPDF />
      <View style={s.divider} />
      <CertificationPDF />
    </Page>
  </Document>
)

export default ResumePDF
