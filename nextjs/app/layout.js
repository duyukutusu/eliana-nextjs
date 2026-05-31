import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import LenisScroll from "../components/LenisScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Duyu Kutusu | Çocuk Gelişimi ve Ergoterapi Merkezi",
  description: "Merve Seçildi Sönmez liderliğinde, ergoterapi, duyu bütünleme ve fiziksel gelişim odaklı profesyonel destek.",
  keywords: ["ergoterapi", "duyu bütünleme", "çocuk gelişimi", "fizik tedavi", "özel eğitim", "İzmit", "Duyu Kutusu"],
  authors: [{ name: "Yaşar Sönmez" }],
  openGraph: {
    title: "Duyu Kutusu | Gelişim Yolculuğundaki En Güvenilir Adım",
    description: "Çocuğunuzun bağımsız ve özgüvenli bireyler olması için bilimsel temelli ergoterapi ve fizyoterapi uygulamaları.",
    siteName: "Duyu Kutusu",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${outfit.variable} ${ovo.variable} font-Outfit leading-8 dark:bg-darkTheme dark:text-white transition-colors duration-300`}>
        <LenisScroll />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}