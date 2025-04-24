import "./globals.css";
import { lubalinFont } from '../public/fonts'

export const metadata = {
  title: "Akshit",
  description: "Akshit Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lubalinFont.variable}`}>
    <body>{children}</body>
  </html>
  );
}
