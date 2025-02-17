"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "@/app/components/images/Logo - White.png";
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from "next/image";
import './car.css'









import Team from "@/app/team";
import Footer from "@/app/components/footer";
import BoxSecond from "@/app/components/box1/Boxsecond";
import FAQSectiontwo from "@/app/components/faq/faqsecond";
import BannerHostBusinessTwo from "@/app/components/cars/carsbannerthird";
import Numbers from "@/app/Numbers/Numberd";
import SvgComponentTrois from "@/app/icons/Icon";
import SvgComponentQuatre from "@/app/icons/newicon";
import MenuIcon from "@/app/components/menuIcon/MenuIcon";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/app/components/localeSwitcher/LocaleSwitcher";
const products = [
  {
    name: "Google Play",
    description: "Trouvez des voitures proches de chez vous",
    href: "#",
    icon: SvgComponentTrois,
  },
  {
    name: "App Store",
    description: "Discutez directement avec les locataires",
    href: "#",
    icon: SvgComponentQuatre,
  },

  
];


const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const backgroundImageStyle: React.CSSProperties = {
  backgroundImage:
    "url('https://media.istockphoto.com/id/1170825611/pt/foto/blue-and-green-blurred-motion-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=h3p0V8Q9BMMJJXiH4lOqM45KY6pItE1MRZ_4QHBOXL0=')", // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
};








export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const t = useTranslations('homePage')
const t_new = useTranslations('newPage');
  return (
    <div>
     
      <header className="bg-transparent absolute mb-12 w-full">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logo} alt="Logo" className="h-8 w-auto" width={52} height={52} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
              <span className="sr-only">Open main menu</span>
              <MenuIcon/>
            </button>

          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                {t('Location de voiture')}
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-white" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#32bb78] group-hover:bg-[#32bb78]">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-black-600" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{t(item.description)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <a href="#" className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">
              
              {t('Devenir locataire')}</a>
<a href="/aide" className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">{t('Aide')}</a>
<a href="/aide" className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">{t('Légal')}</a>

          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">


      
<LocaleSwitcher/>
              
           
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />

              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
             



              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {t('Télécharger')}
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {products.map((item) => (
                        <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a href="/new" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Devenir hôte')}</a>
                  <a href="/aide" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Aide')}</a>
                </div>
                <LocaleSwitcher/>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>





      <div className="bg-blue-700" style={backgroundImageStyle}>
  <div className="px-6 py-24 sm:px-6 sm:py-52 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-white text-4xl different font-semibold tracking-tight sm:text-5xl">
        <span className="typewriter different">
          {t_new("Gagner de l'argent")} 
        </span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg text-white">
     {t_new('main-desc')}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-6 sm:gap-y-0">
      <a
  href="#"
  className="rounded-full border border-[#32bb78] hover:border-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
             focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 bg-[#32bb78]"
>
  {t_new("Verifer vos documents et commencez à gagner de l'argent")}
</a>



      </div>
    </div>
  </div>
</div>





<Numbers/>
<BannerHostBusinessTwo/>
      <BoxSecond/>
      <FAQSectiontwo/>
      <Team />
      <Footer />
    </div>
  );
}
