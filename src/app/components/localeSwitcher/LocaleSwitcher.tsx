'use client';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import { CircleFlagLanguage } from 'react-circle-flags';

type LocaleSwitcherProps = {
  removePadding?: boolean;
  removeMargin?: boolean;
};

export default function LocaleSwitcher({
  removePadding = false,
  removeMargin = false,
}: LocaleSwitcherProps) {
  const languages: Record<string, string> = {
    en: 'English',
    fr: 'Français',
    pt: 'Português',
    it: 'Italiano',
    es: 'Español',
    ru: 'Русский',
    ja: '日本語', // Japanese
  };

  const locale = useLocale();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const currentLanguageName = languages[locale] || locale;

  return (
    <div
      className={`${
        removeMargin ? 'ml-0' : 'ml-4'
      } ${removePadding ? 'py-0' : 'py-2'}`}
    >
      <div
        onClick={toggleDropdown}
        className="relative inline-flex items-center cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen ? 'true' : 'false'}
      >
        <div className="bg-transparent text-white hover:text-black hover:bg-gray-100 hover:ring-2 hover:ring-[#32bb78] flex items-center justify-between transition-all duration-300 ease-in-out rounded-full px-4 py-2">
          <CircleFlagLanguage className="w-6 h-6" languageCode={locale as string} />
          <p className="ml-2 text-sm font-medium">{currentLanguageName}</p>
          <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
        </div>

        {isDropdownOpen && (
          <div className="absolute mt-2 left-0 right-0 bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-auto ring-1 ring-[#32bb78]">
            <LocaleSwitcherSelect
              currentLocale={locale}
              allLocales={Object.keys(languages)}
              setIsDropdownOpen={setIsDropdownOpen}
              languages={languages}
            />
          </div>
        )}
      </div>
    </div>
  );
}
