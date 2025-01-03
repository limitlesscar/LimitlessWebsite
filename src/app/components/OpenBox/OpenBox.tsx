import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import Image from "next/image";
import logo from "@/app/components/images/Logo - Black.png";
import { FaX } from "react-icons/fa6";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaReddit, FaTumblr } from "react-icons/fa";

function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [allowCookies, setAllowCookies] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setIsOpen(true);
      localStorage.setItem("hasSeenModal", "true");
    }
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-labelledby="info-modal-title"
        aria-describedby="info-modal-description"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

        {/* Modal Content */}
        <Dialog.Panel className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 hover:text-gray-900 active:text-gray-700 transition-colors duration-200"
            aria-label="Close"
          >
            ✕
          </button>

          <Image
            src={logo}
            alt="Logo"
            className="mx-auto h-8 w-auto mb-12"
            width={52}
            height={52}
          />

          {/* Modal Title */}
          <Dialog.Title
            id="info-modal-title"
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            Sélectionnez votre langue
          </Dialog.Title>

          {/* Locale Switcher */}
          <div className="flex justify-center mb-6">
            <LocaleSwitcher />
          </div>

          {/* Allow Cookies Toggle */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-700">Cookies</span>
            <button
              onClick={() => setAllowCookies(!allowCookies)}
              className={`relative w-12 h-6 rounded-full focus:outline-none ${allowCookies ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <span
                className={`absolute left-0 top-0 m-1 w-4 h-4 rounded-full bg-white transform transition-transform ${allowCookies ? 'translate-x-6' : ''}`}
              />
            </button>
          </div>

       

          {/* Actions */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={closeModal}
              className="bg-black font-bold text-white rounded-full px-6 py-3 text-sm hover:opacity-75 focus:outline-none focus:ring-4"
            >
              Fermer
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-12 mb-12">
            <a href="https://x.com/LimitlessA66221" className="text-gray-500 hover:text-gray-900" aria-label="Twitter">
              <FaX size={20} />
            </a>
            <a href="https://www.instagram.com/limitlescar/" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
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
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default InfoModal;
