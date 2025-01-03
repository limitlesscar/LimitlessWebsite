import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
export const routing = defineRouting({
  locales: ['fr', 'en' , 'pt' , 'ja' , 'it' , 'es', 'ru'],
  defaultLocale: 'fr',
  pathnames: {
    '/': '/'
  }
});
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);