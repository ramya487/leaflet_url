import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "leaflet",
  description: "leaflet demo with download url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
