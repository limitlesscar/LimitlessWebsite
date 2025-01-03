import {ReactNode} from 'react';
import localFont from '@next/font/local';

type Props = {
  children: ReactNode;
};

const Es = localFont({
  src: '../fonts/es.ttf',
});
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}

