import "./globals.css";

export const metadata = {
  title: "Abdelrahman Khaled",
  description:
    "Abdelrahman Khaled, Personal Portfolio - Full Stack next.js developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
