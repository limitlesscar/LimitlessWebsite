import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

// Load custom font (client-side only)
const myFont = localFont({ src: "./font/Poppins-SemiBold.ttf" });

export const metadata: Metadata = {
  title: "Limitless",
  description: "Louer une voiture",
  icons: {
    icon: "/favicon.ico", // Path relative to the public folder
  },
};

// Define Props type with any for children
type Props = {
  children: any;  // Allow any type for children
  locale: string;  // Dynamic locale passed here
};

// Layout component
export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${myFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
