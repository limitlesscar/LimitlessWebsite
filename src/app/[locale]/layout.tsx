import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

// Load custom font
const myFont = localFont({ src: './font/Poppins-SemiBold.ttf' });

export const metadata: Metadata = {
  title: "limitless",
  description: "Louer une voiture",
  icons: {
    icon: "/favicon.ico", // Path relative to the public folder
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();

  // Determine text direction based on locale
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <head>
        {/* Add the favicon */}
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
