'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from 'next/image';
import Navsearch from './navsearch';
import Footer from '../footer';
import { useRouter } from 'next/navigation';  // Import useRouter
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '../localeSwitcher/LocaleSwitcher';

const navigation = [
  { name: 'Location de voiture', href: '/' },
  { name: 'Devenir locataire', href: '/new' },  // Direct link, no need for handleNavigate
  { name: 'Aide', href: '/aide' },
  { name: 'Légal', href: '/aide' },
]

export default function NavCenter() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();  // Initialize router
  
  // Handle navigation to the new page
  const handleNavigate = () => {
    router.push('/new');  // Navigate to the '/new' page
  };
const t = useTranslations("homePage")
  return (
    <div>
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                  {t(item.name)}
                </a>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
          </a>
         
          <div className="flex flex-1 justify-end">
          <LocaleSwitcher removePadding removeMargin/>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-1">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />


              </a>
              <div className="flex flex-1 justify-end">
            
              </div>
            </div>
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t(item.name)}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <Navsearch />
      <Footer />
    </div>
  );
}