import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "AIQualify - AI Interview Taker",
  description: "Made by 64 Squares LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-grow">{children}</div>
        <footer className="mt-[80vh] bottom-0 text-sm text-center w-full pb-2">
          Made with ❤️ at{" "}
          <a
            className="text-blue-700"
            href="https://innosquares.com/"
            target="_blank"
          >
            InnoSquares LLC
          </a>
        </footer>
      </body>
    </html>
  );
}
