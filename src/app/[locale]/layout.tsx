import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

// Load custom font (client-side only)
const myFont = localFont({ src: "./font/Poppins-SemiBold.ttf" });

export const metadata: Metadata = {
  title: "Limitless",
  description: "Louer une voiture",
  icons: {
    icon: "/favicon.ico", // Path relative to the public folder
  },
};

// Define Props type
type Props = {
  children: React.ReactNode;
  locale: string;  // Dynamic locale passed here
  params: { locale: string }; // Add params to match expected type
};

// Async function for RootLayout
export default async function Layout({
  children,
  locale,
  params, // Include params in the destructured props
}: Props) {
  // Fetch messages based on the dynamic locale (server-side operation)
  let messages;
  try {
    messages = await getMessages({ locale }); // Use dynamic locale
  } catch (error) {
    console.error("Failed to load messages", error);
    return <p>Error loading content</p>; // Show an error message if messages can't be loaded
  }
  return (
    <html lang={locale} >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${myFont.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
