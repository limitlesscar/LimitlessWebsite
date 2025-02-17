"use client";
import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";

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
import Link from "next/link";
import { useRouter } from "next/navigation";
import image from "@/app/components/images/24.png";
import SvgComponentTrois from "../icons/Icon";
import SvgComponentQuatre from "../icons/newicon";
import Box2 from "../components/box2/Box2";
import MenuIcon from "../components/menuIcon/MenuIcon";
import InfoModal from "../components/OpenBox/OpenBox";
import { useTranslations } from "next-intl";
import Team from "../team";
import LocaleSwitcher from "../components/localeSwitcher/LocaleSwitcher";
import "./style.css"; // Import your custom styles
import { FaX } from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTumblr,
} from "react-icons/fa";
import ModalDialog from "../components/modalsialog/modaldialog";
import BlogSectione from "../components/blog/product";
import "./style.css"; // Assurez-vous que le chemin est correct selon votre structure de projet
import localFont from "next/font/local";
import BottomNav from "../components/bottomnav/bottomnav";
import SvgComponentSix from "../icons/six";
import Alert from "../components/Alert/Alert";
import Features from "../components/select/NewsScelect";
import Stats from "../components/stats/stats";
import Brands from "../components/brands/brands";
import SearchBar from "../components/serachbar/SearchBar";

const products = [
  {
    name: "Dowload the app",
    description: "ge",
    href: "#",
    icon: SvgComponentSix,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const backgroundImageStyle: React.CSSProperties = {
  backgroundImage: `url(${image.src})`, // Use the .src property of the imported image
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const myFont = localFont({ src: "./font/Poppins-SemiBold.ttf" });

export default function Page() {

  const t = useTranslations("homePage");

  const router = useRouter();

  const navigateToNew = () => {
    router.push("/new");
  };

  const handleNavigate = () => {
    router.push("/new"); // Replace with your desired path
  };

  const handleNavigateTwo = () => {
    router.push("/aide"); // Replace with your desired path
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setLoading(false); // Simulate end of loading
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10); // Adjust the interval time to control progress speed
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 bg-opacity-50 rounded-full animate-pulse"></div>
          
          {/* Logo */}
          <Image src={logo} alt="Logo" width={80} height={80} className="z-10 mb-4" />

          {/* Loading Text */}
          <div className="text-white font-bold text-lg animate-bounce mb-4">...</div>

          {/* Progress Bar */}
          <div className="w-64 bg-gray-300 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress Text */}
          <div className="text-white font-medium mt-2">{progress}%</div>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Alert />

      <div className={myFont.className}>
        <header className="bg-gray-500 bg-opacity-5 fixed backdrop-blur-lg rounded-xl border border-white/20  mb-12 w-full py-0.5 px-2 shadow-sm">
          <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="https://golimitless.fr/" className="-m-1.5 p-1.5">
                <span className="sr-only">GoLimitless</span>
                <Image
                  src={logoblack}
                  alt="Logo"
                  className="h-8 w-auto"
                  width={52}
                  height={52}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              >
                <span className="sr-only">Open main menu</span>

                <MenuIcon />
              </button>

              <button
                onClick={handleNavigateTwo}
                type="button"
                className="text-white mt-2 bg-[#32bb78] hover:opacity-50 ml-4 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                {t("Aide et Légal")}
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1  text-sm font-semibold leading-6 text-black">
                  {t("Location de voiture")}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-black"
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#32bb78] group-hover:bg-[#32bb78]">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600 group-hover:text-black-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {t(item.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              <button
                onClick={handleNavigate}
                className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-black"
              >
                {t("Devenir locataire")}
              </button>

              <a
                href="/aide"
                className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-black"
              >
                {t("Aide")}
              </a>
              <a
                href="/aide"
                className="text-sm font-semibold leading-6 hover:underline hover:decoration-4 hover:decoration-white text-black"
              >
                {t("Légal")}
              </a>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           
              <LocaleSwitcher />
            </div>

            <SearchBar/>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">limitless</span>
                  <Image
                    src={logoblack}
                    alt="Logo"
                    className="h-8 w-auto"
                    width={52}
                    height={52}
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {t("Télécharger")}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                    <a
                      href="/new"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {t("Devenir hôte")}
                    </a>
                    <a
                      href="/aide"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 mb-24"
                    >
                      {t("Aide")}
                    </a>
                    <LocaleSwitcher removeMargin removePadding />

                    <div className="flex my-40  justify-center space-x-6 mt-24 mb-12">
                      <a
                        href="https://x.com/LimitlessA66221"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Twitter"
                      >
                        <FaX size={20} />
                      </a>
                      <a
                        href="https://instagram.co"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Instagram"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61571093265011"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Facebook"
                      >
                        <FaFacebook size={20} />
                      </a>
                      <a
                        href="mailto:rentalcarapplimitlessslimitles@gmail.com"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Gmail"
                      >
                        <FaEnvelope size={20} />
                      </a>
                      <a
                        href="https://www.reddit.com/user/Born_Pangolin_3308/"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Reddit"
                      >
                        <FaReddit size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/limitlessapp-rental-car-app-limitlesss-1293b5344/"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href="https://www.tumblr.com/blog/golimitlesscom"
                        className="text-gray-500 hover:text-gray-900"
                        aria-label="Tumblr"
                      >
                        <FaTumblr size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="bg-blue-700 " style={backgroundImageStyle}>
          <div className="px-6 py-24 sm:px-6 sm:py-52 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                className="mt-6 lg:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="border-2 mt-22 text-white text-xs font-medium me-2 px-3.5 py-2.5 rounded-full mt-12 bg-gradient-to-r from-blue-500 via-[#32bb78] to-[#32bb78]">
                  <a href="/aide">
                    {" "}
                    {t("Notre assurance prend en compte tout")} ➝
                  </a>
                </span>
              </motion.div>

              <h2 className="different mt-12 mb-10 text-4xl lg:text-6xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent animate-pulse">
  <span>{t("Location de voitures")}</span>
</h2>






              <p className="mx-auto mt-6 max-w-xl text-md text-black">
                {t("appDescription")}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-6 sm:gap-x-6 sm:gap-y-0">
                <a
                  href="gettheapp"
                  className="rounded-full   hover:border-[#32bb78] bg-black px-12 py-3.5 text-sm font-semibold text-white
          hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
          focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <SvgComponentTrois />
                  {t("Télécharger l'appli pour IOS")}
                </a>

                <a
                  href="gettheapp"
                  className="rounded-full border  hover:border-[#32bb78] bg-black px-12 py-3.5 text-sm font-semibold text-white 
          hover:bg-[#32bb78] hover:shadow-lg focus:ring-4 focus:ring-green-500 focus:outline-none 
          focus:ring-offset-2 focus:ring-offset-black active:shadow-xl active:scale-95 flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <SvgComponentQuatre />
                  {t("Télécharger l'appli pour Android")}
                </a>
              </div>

              <div className="flex flex-row">
                <p className="mt-8 text-black font-medium text-sm">
                  {t(
                    "Location de voiture entre particuliers et pros assurée par AXA"
                  )}
                </p>
                <Image
                  src="data:image/png;base64,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"
                  alt="Logo AXA"
                  width={100}
                  height={50}
                  className="w-auto mt-8 lg:mt-4 ml-4 h-10"
                />
              </div>

              <div className="flex justify-center mt-4 animate-rating">
                <span className="text-black text-sm font-semibold">4.6/5</span>
                <span className="text-black text-sm mx-2">★ ★ ★ ★ ★</span>
                <span className="text-black text-sm">
                  ({t("10k avis sur les stores")})
                </span>
              </div>
            </div>
          </div>
        </div>




        <Brands />

        <Features />

        <BannerBusiness />
        <Box2 />
        <InfoModal />
        <Boxone />
        <BlogSectione />
        <Reviews />

        <FAQSection />

        <Team />
        <Footer />
      </div>
    </div>
  );
}

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

