import { ReactNode } from 'react';

type Props = {
  children: ReactNode; // `ReactNode` allows anything that can be rendered in React
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
