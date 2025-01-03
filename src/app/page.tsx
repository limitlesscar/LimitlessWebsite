import {redirect} from 'next/navigation';
import localFont from '@next/font/local';

const Es = localFont({
  src: '../fonts/es.ttf',
});
// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/fr');
}