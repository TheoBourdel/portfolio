import "./globals.css";
import { Background } from "../components/ui/hero-highlight";
import Header from "@/components/shared/Header";
import myFont from "@/lib/customFont";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" /> 
      </head>
      <body>
      {/* <body className={`${myFont.variable} font-ppFormula`}> */}
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Background>
          <Header />
          {children}
          <Footer />
        </Background>
      </ThemeProvider>
      </body>
    </html>
  );
}
