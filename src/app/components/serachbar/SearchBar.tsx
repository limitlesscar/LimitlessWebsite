import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type LanguageKeys = 'en' | 'es' | 'it' | 'ja' | 'ru' | 'pt' | 'fr';

const languages: Record<LanguageKeys, { searchPlaceholder: string; noResults: string; items: { name: string; link: string; }[] }> = {
  en: {
    searchPlaceholder: 'Search...',
    noResults: 'No results found',
    items: [
      { name: 'Assurance', link: '/aide' },
      { name: 'Privacy Terms', link: '/aide' },
      { name: 'Rent a Car', link: '/' },
      { name: 'Become a Host', link: '/new' },
      { name: 'Contact', link: '/aide' },
    ],
  },
  es: {
    searchPlaceholder: 'Buscar...',
    noResults: 'No se encontraron resultados',
    items: [
      { name: 'Seguro', link: '/aide' },
      { name: 'Términos de privacidad', link: '/aide' },
      { name: 'Alquilar un coche', link: '/' },
      { name: 'Conviértete en anfitrión', link: '/new' },
      { name: 'Contacto', link: '/aide' },
    ],
  },
  it: {
    searchPlaceholder: 'Cerca...',
    noResults: 'Nessun risultato trovato',
    items: [
      { name: 'Assicurazione', link: '/aide' },
      { name: 'Termini sulla privacy', link: '/aide' },
      { name: 'Noleggia un’auto', link: '/' },
      { name: 'Diventa un host', link: '/new' },
      { name: 'Contatto', link: '/aide' },
    ],
  },
  ja: {
    searchPlaceholder: '検索...',
    noResults: '結果が見つかりません',
    items: [
      { name: '保証', link: '/aide' },
      { name: 'プライバシーの規約', link: '/aide' },
      { name: 'レンタカー', link: '/' },
      { name: 'ホストになる', link: '/new' },
      { name: 'お問い合わせ', link: '/aide' },
    ],
  },
  ru: {
    searchPlaceholder: 'Поиск...',
    noResults: 'Результатов не найдено',
    items: [
      { name: 'Страхование', link: '/aide' },
      { name: 'Политика конфиденциальности', link: '/aide' },
      { name: 'Аренда автомобиля', link: '/' },
      { name: 'Стать хозяином', link: '/new' },
      { name: 'Контакт', link: '/aide' },
    ],
  },
  pt: {
    searchPlaceholder: 'Pesquisar...',
    noResults: 'Nenhum resultado encontrado',
    items: [
      { name: 'Seguro', link: '/aide' },
      { name: 'Termos de privacidade', link: '/aide' },
      { name: 'Alugar um carro', link: '/' },
      { name: 'Torne-se um anfitrião', link: '/new' },
      { name: 'Contato', link: '/aide' },
    ],
  },
  fr: {
    searchPlaceholder: 'Rechercher...',
    noResults: 'Aucun résultat trouvé',
    items: [
      { name: 'Assurance', link: '/aide' },
      { name: 'Conditions de confidentialité', link: '/aide' },
      { name: 'Louer une voiture', link: '/' },
      { name: 'Devenir hôte', link: '/new' },
      { name: 'Contact', link: '/aide' },
    ],
  },
};

export default function SearchBar() {
  const locale = useLocale();  // Get current locale from useLocale hook
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const currentLanguage = locale as LanguageKeys;  // Use the current locale as the language key
  const placeholderText = languages[currentLanguage]?.searchPlaceholder || 'Search...';


  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  const filteredItems = languages[currentLanguage]?.items?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  return (
    <>
      {/* Search Button */}
      <button
        onClick={toggleSearch}
        className="bg-gradient-to-r ml-4 bg-[#32bb78] p-2 rounded-full shadow-lg text-white flex items-center justify-center w-10 h-10"
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>

    


    {/* Search Modal with Glass Effect */}
<AnimatePresence>
  {isSearchOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white bg-opacity-20 backdrop-blur-sm w-full max-w-lg p-6 rounded-2xl shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={toggleSearch}
          className="absolute top-4 right-4 text-gray-200 hover:text-gray-400 transition-all duration-300"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Search Input */}
        <div className="flex items-center bg-gray-100 bg-opacity-50 border border-gray-300 rounded-full px-4 py-3 shadow-sm backdrop-blur-sm">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />

<input
  type="text"
  className="ml-3 w-full bg-transparent focus:outline-none text-gray-900 placeholder-gray-500 text-lg"
  placeholder={placeholderText}
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  autoFocus
/>

        </div>

        {/* Search Results */}
        {searchQuery && (
          <ul className="mt-4 space-y-2">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} onClick={toggleSearch}>
                    <span className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-500 px-4 py-2">{languages[currentLanguage].noResults}</li>
            )}
          </ul>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </>
  );
}




