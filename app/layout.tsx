import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plant Helper",
  description: "Your go-to app for plant care and management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
