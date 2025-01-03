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
import Footer from "../components/footer";
import logo from "@/app/components/images/Logo - White.png";
import logoblack from "@/app/components/images/Logo - Black.png";
import Image from "next/image";
import Boxone from "../components/box1/Boxone";
import Reviews from "../components/reviews/reviews";
import FAQSection from "../components/faq/faq";
import Cars from "../components/cars/carsbanner";
import BannerBusiness from "../components/cars/carsbannertwo";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import image from '@/app/components/images/1.png'
import SvgComponentTrois from "../icons/Icon";
import SvgComponentQuatre from "../icons/newicon";
import Box2 from "../components/box2/Box2";
import MenuIcon from "../components/menuIcon/MenuIcon";
import InfoModal from "../components/OpenBox/OpenBox";
import { useTranslations } from "next-intl";
import Team from "../team";
import LocaleSwitcher from "../components/localeSwitcher/LocaleSwitcher";
import './style.css';  // Import your custom styles
import { FaX } from "react-icons/fa6";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTumblr } from "react-icons/fa";
import ModalDialog from "../components/modalsialog/modaldialog";
import BlogSectione from "../components/blog/product";
import './style.css'; // Assurez-vous que le chemin est correct selon votre structure de projet
import localFont from '@next/font/local';


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
  backgroundImage: `url(${image.src})`,  // Use the .src property of the imported image
  backgroundSize: "cover",
  backgroundPosition: "center",
};




export default function Page() {
 
  const [progress, setProgress] = useState(0);

  const esFont = localFont({
    src: '../fonts/es.ttf',
  });

  
const t = useTranslations('homePage')


  const router = useRouter();

  const navigateToNew = () => {
    router.push('/new');
  };
  

  const handleNavigate = () => {
    router.push('/new'); // Replace with your desired path
  };

  const handleNavigateTwo = () => {
    router.push('/aide'); // Replace with your desired path
  };





  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);




  return (
    <div style={{ fontFamily: esFont.style.fontFamily }}>
    
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

            <button  onClick={handleNavigateTwo} type="button" className="text-white mt-2 bg-[#32bb78] hover:opacity-50 ml-4 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
            {t('Aide et Légal')}
            </button>



          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1  text-sm font-semibold leading-6 text-white">
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



          <button onClick={handleNavigate}className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-white">
             {t('Devenir locataire')}
            </button>


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
                <span className="sr-only">
                  limitless
                </span>
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
                  <a href="/aide" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mb-24">{t('Aide')}</a>
                  <LocaleSwitcher  removeMargin removePadding/>



                  <div className="flex my-40  justify-center space-x-6 mt-24 mb-12">
    <a href="https://x.com/LimitlessA66221" className="text-gray-500 hover:text-gray-900" aria-label="Twitter">
      <FaX size={20} />
    </a>
    <a href="https://instagram.co" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
      <FaInstagram size={20} />
    </a>
    <a href="https://www.facebook.com/profile.php?id=61571093265011" className="text-gray-500 hover:text-gray-900" aria-label="Facebook">
      <FaFacebook size={20} />
    </a>
    <a href="mailto:rentalcarapplimitlessslimitles@gmail.com" className="text-gray-500 hover:text-gray-900" aria-label="Gmail">
      <FaEnvelope size={20} />
    </a>
    <a href="https://www.reddit.com/user/Born_Pangolin_3308/" className="text-gray-500 hover:text-gray-900" aria-label="Reddit">
      <FaReddit size={20} />
    </a>
    <a href="https://www.linkedin.com/in/limitlessapp-rental-car-app-limitlesss-1293b5344/" className="text-gray-500 hover:text-gray-900" aria-label="LinkedIn">
      <FaLinkedin size={20} />
    </a>
    <a href="https://www.tumblr.com/blog/golimitlesscom" className="text-gray-500 hover:text-gray-900" aria-label="Tumblr">
      <FaTumblr size={20} />
    </a>
  </div>


                </div>
              
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="bg-blue-700" style={backgroundImageStyle}>
  <div className="px-6 py-24 sm:px-6 sm:py-52 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
    
    <span className="bg-transparent border border-white mb-4 text-white text-xs font-medium me-2 px-3.5 py-2.5 rounded-full arrow-badge">
  <a href="/aide">{t('Notre assurance prend en compte tout')}</a> 
</span>



      <h2 className="text-white mt-12 text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed">
  <span className="typewriter">{t('Location de voitures')}</span>
</h2>

      
    
      <p className="mx-auto mt-6 max-w-xl text-lg text-white">
{t('appDescription')}
      </p>
      



      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-6 sm:gap-y-0">
        <a
          href="#"
          className="rounded-full border border-[#32bb78] hover:border-[#32bb78] bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
          hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
          focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <SvgComponentTrois />
          {t("Télécharger l'appli pour IOS")}
        </a>

        <a
          href="#"
          className="rounded-full border border-[#32bb78] hover:border-[#32bb78] bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
          hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
          focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <SvgComponentQuatre />
          {t("Télécharger l'appli pour Android")}
        </a>
      </div>






      {/* Texte et étoiles */}
      <p className="mt-8 text-white font-medium text-lg">
        {t('Location de voiture entre particuliers et pros assurée par AXA')}
      </p>
      <div className="flex justify-center mt-4 animate-rating">
  <span className="text-white text-lg font-semibold">4.6/5</span>
  <span className="text-white mx-2">★ ★ ★ ★ ★</span>
  <span className="text-white text-sm">({t('10k avis sur les stores')})</span>
</div>

    </div>
  </div>
</div>






<BannerBusiness/>
<Box2/>
<InfoModal/>
      <Boxone/>
      <BlogSectione/>
      <Reviews/>
      <FAQSection/>
       
      <Team />
      <Footer />
    </div>
  );
}
