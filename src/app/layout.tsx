import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kethavath Anil | Portfolio",
  description:
    "Personal portfolio of Kethavath Anil - Computer Science Engineering student, Front-End Developer, UI/UX Designer, and Python Developer. Explore my projects, skills, and achievements.",
  keywords: [
    "Kethavath Anil",
    "Portfolio",
    "Computer Science",
    "Web Developer",
    "Front-End Developer",
    "UI/UX Designer",
    "Python Developer",
    "Django",
    "React",
  ],
  authors: [{ name: "Kethavath Anil" }],
  openGraph: {
    title: "Kethavath Anil | Portfolio",
    description:
      "Computer Science Engineering student passionate about web development and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}