import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kethavath Anil | Portfolio",
  description:
    "Personal portfolio of Kethavath Anil — Computer Science Engineering student, Front-End Developer, UI/UX Designer, and Python Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}