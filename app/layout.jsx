import "./globals.css";
import { lubalinFontD, lubalinFontM , ExoDB , ForzaB ,ExoB ,ForzaBold} from '../public/fonts'

export const metadata = {
  title: "Akshit",
  description: "Akshit Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lubalinFontD.variable} ${lubalinFontM.variable} ${ExoDB.variable} ${ForzaB.variable} ${ExoB.variable} ${ForzaBold.variable}`}>
      <body>{children}</body>
    </html>
  );
}