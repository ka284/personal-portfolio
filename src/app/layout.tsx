import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kethavath Anil | Portfolio",
  description:
    "Computer Science Engineering student portfolio showcasing projects, skills, certifications, and achievements in web development, Python, and IoT.",
  keywords: [
    "Kethavath Anil",
    "Portfolio",
    "Computer Science",
    "Web Developer",
    "Python Developer",
    "UI/UX Designer",
    "Front-End Developer",
  ],
  authors: [{ name: "Kethavath Anil" }],
  openGraph: {
    title: "Kethavath Anil | Portfolio",
    description:
      "Computer Science Engineering student portfolio showcasing projects, skills, and achievements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}