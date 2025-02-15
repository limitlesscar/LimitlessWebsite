'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { type ChangeEvent, type ReactNode, useTransition } from 'react';
import { usePathname, useRouter, type Locale } from '@/i18n/routing';
import { CircleFlagLanguage } from 'react-circle-flags';

type Props = {
  currentLocale: string;
  allLocales: string[];
  setIsDropdownOpen: (isOpen: boolean) => void;
  languages: Record<string, string>;
};

export default function LocaleSwitcherSelect({
  currentLocale,
  allLocales,
  setIsDropdownOpen,
  languages,
}: Readonly<Props>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale: string) {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(
        { pathname, query: { ...params } },
        { locale: nextLocale }
      );
    });
    setIsDropdownOpen(false);
  }

  return (
    <div className="flex flex-col items-center bg-[#32bb78] rounded-md overflow-hidden">
      {allLocales.map((locale) => {
        if (locale === currentLocale) return null;
        return (
          <button
            className="w-full flex items-center gap-3 text-left px-2 py-[3px] duration-500 text-white ease-in-out transition-colors hover:bg-[#f0eaea] hover:text-black"
            key={locale}
            type="button"
            onClick={() => onSelectChange(locale)}
          >
            <CircleFlagLanguage className="w-5 h-5" languageCode={locale} />
            {languages[locale]}
          </button>
        );
      })}
    </div>
  );
}
