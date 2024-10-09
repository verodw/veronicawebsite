import { Rubik } from "next/font/google";
import "./globals.css";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Veronica Dwiyanti",
  description: "Portfolio Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/images/dark_theme.png" sizes="25x25" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}



