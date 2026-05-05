import { renderToBuffer } from '@react-pdf/renderer'
import ResumePDF from '@/app/pdf/document'
import '@/app/pdf/fonts'

export const dynamic = 'force-dynamic'

export async function GET() {
  const buffer = await renderToBuffer(<ResumePDF />)
  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename*=UTF-8\'\'%EC%B5%9C%EC%9A%A9%EC%9B%90_%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf',
    },
  })
}
