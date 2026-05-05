import { Font } from '@react-pdf/renderer'
import path from 'path'

const staticDir = path.join(process.cwd(), 'node_modules/pretendard/dist/public/static')

Font.register({
  family: 'Pretendard',
  fonts: [
    { src: path.join(staticDir, 'Pretendard-ExtraLight.otf'), fontWeight: 200 },
    { src: path.join(staticDir, 'Pretendard-Light.otf'), fontWeight: 300 },
    { src: path.join(staticDir, 'Pretendard-Regular.otf'), fontWeight: 400 },
    { src: path.join(staticDir, 'Pretendard-Medium.otf'), fontWeight: 500 },
    { src: path.join(staticDir, 'Pretendard-SemiBold.otf'), fontWeight: 600 },
    { src: path.join(staticDir, 'Pretendard-Bold.otf'), fontWeight: 700 },
  ],
})

Font.registerHyphenationCallback((word) => [word])
