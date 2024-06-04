import type { Metadata } from "next";
import localFont from "next/font/local";
import "./global.css";
import { LayoutStyle } from "./style.css";
import DownloadButton from "./component/DownloadButton";

export const metadata: Metadata = {
  title: "최용원 이력서",
  description: "최용원 이력서 - 프론트엔드 엔지니어 (산업기능요원)",
  icons: {
    icon: "/favicon.ico",
  },
};

const pretendard = localFont({
  src: "./_asset/font/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>
        <main className={LayoutStyle}>
          {children}
          <DownloadButton/>
        </main>
      </body>
    </html>
  );
}
