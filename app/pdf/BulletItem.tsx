import { View, Text } from '@react-pdf/renderer'
import { s } from './styles'

const BulletItem = ({ children }: { children: any }) => (
  <View style={s.bulletRow}>
    <Text style={s.dot}>▪</Text>
    <Text style={s.li}>{children}</Text>
  </View>
)

export default BulletItem
