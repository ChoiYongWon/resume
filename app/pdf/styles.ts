import { StyleSheet } from '@react-pdf/renderer'

export const C = {
  primary: '#222222',
  accent: '#EB5757',
  badge: '#EDEDEB',
  muted: '#888888',
}

export const s = StyleSheet.create({
  sectionTitle: { fontSize: 10, fontWeight: 700, color: '#222222' },
  cardTitle: { fontSize: 10, fontWeight: 500, color: '#222222', textDecoration: 'underline' },
  cardTitlePlain: { fontSize: 10, fontWeight: 500, color: '#222222' },
  day: { fontSize: 9, color: '#222222', marginTop: 2 },
  host: { fontSize: 9, color: '#888888', marginTop: 1 },
  introduce: { fontSize: 9, color: '#888888', marginTop: 4 },
  badge: { paddingHorizontal: 6, paddingVertical: 2, backgroundColor: '#EDEDEB', borderRadius: 2, fontSize: 8.5, color: '#222222' },
  badgeAccent: { paddingHorizontal: 6, paddingVertical: 2, backgroundColor: '#EDEDEB', borderRadius: 2, fontSize: 8.5, color: '#EB5757', fontWeight: 700 },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 5 },
  bulletRow: { flexDirection: 'row', marginBottom: 5, alignItems: 'flex-start' },
  dot: { fontSize: 9, fontWeight: 200, marginRight: 5, color: '#222222', marginTop: 1 },
  li: { flex: 1, fontSize: 9, fontWeight: 200, lineHeight: 1.4, color: '#222222' },
  link: { color: '#222222', textDecoration: 'underline' },
  subTitle: { fontSize: 9.5, fontWeight: 600, color: '#222222', marginTop: 8, marginBottom: 3 },
  divider: { width: '100%', height: 0.5, backgroundColor: '#202020', opacity: 0.3, marginVertical: 18 },
})
