import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE PROUD | โครงการบ้านคุณภาพ",
  description: "สร้างสรรค์บ้านในฝัน ด้วยการออกแบบที่เหนือระดับ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
