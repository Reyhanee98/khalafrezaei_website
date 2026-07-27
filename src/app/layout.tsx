import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "محمد خلف رضائی زارع | کارشناس رسمی دادگستری",
  description:
    "کارشناس رسمی دادگستری در رشته راه، ساختمان و نقشه‌برداری — ارزیابی اراضی و ابنیه، برآورد خسارات، تعیین اجاره‌بها و محاسبات فنی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
