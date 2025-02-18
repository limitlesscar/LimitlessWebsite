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
};

// Async function for RootLayout
export default async function RootLayout({
  children,
  locale,
}: Readonly<Props>) {
  // Fetch messages based on the dynamic locale (server-side operation)
  let messages;
  try {
    messages = await getMessages({ locale }); // Use dynamic locale
  } catch (error) {
    console.error("Failed to load messages", error);
    return <p>Error loading content</p>; // Show an error message if messages can't be loaded
  }

  // Determine text direction based on locale (e.g., 'rtl' for Arabic)
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
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
