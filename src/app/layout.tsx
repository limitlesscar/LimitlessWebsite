import { ReactNode } from 'react';
type Props = {
  children: ReactNode; 
  // more props
  [key: string]: any;
};
export default function RootLayout({ children }: Props) {
  return children;
}
