// Import necessary modules
import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

// Load custom font
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
  params: { locale: string };
};

// Async function for RootLayout
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
}: Readonly<Props>) {
  // Ensure that the incoming `locale` is valid, and if not, trigger a 404 response
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  // Fetch messages for the specified locale, handle any errors gracefully
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound(); // Trigger a 404 if the messages cannot be loaded
  }

  // Determine text direction based on locale
  const direction = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={direction}>
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${myFont.className} antialiased`}>
        {/* Provide messages to the app via NextIntlClientProvider */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
