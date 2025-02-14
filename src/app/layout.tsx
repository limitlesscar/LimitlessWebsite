<<<<<<< Updated upstream

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
=======
import { ReactNode, ReactElement } from 'react';

type Props = {
  children: ReactNode; // `ReactNode` allows anything that can be rendered in React, but can be more specific
};

// A layout is required for Next.js projects with a `not-found.tsx` page at the root.
// This layout simply passes the `children` through to the page.
export default function RootLayout({ children }: Props): ReactElement {
>>>>>>> Stashed changes
  return <>{children}</>;
}
