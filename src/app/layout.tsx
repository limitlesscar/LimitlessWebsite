import { ReactNode } from 'react';
import localFont from 'next/font/local'; // Correction de l'import

// Déclaration de la police (remplace le chemin par le bon)

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" dir='ltr'>
      {children}
    </html>
  );
}
