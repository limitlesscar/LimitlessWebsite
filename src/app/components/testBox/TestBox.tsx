import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
export default function TestBox() {
  const [isOpen, setIsOpen] = useState(true);
  const t = useTranslations("posts");
  const closeBox = () => {
    setIsOpen(false);
  };
  const openAppleWebsite = () => {
    // Here we are opening the Apple website in a new tab
    window.open("https://www.apple.com", "_blank", "noopener noreferrer");
  };
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out opacity-100">
        <div className="p-8 bg-white border border-gray-300 rounded-xl shadow-lg w-96 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {t('test_box_title')}
            </h3>
            <button
              onClick={closeBox}
              className="text-gray-600 hover:text-gray-800 text-lg font-bold"
            >
              X
            </button>
          </div>
          <div className="flex flex-col items-center mb-6">
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              {t('app_ready_message')}
            </p>
          </div>
          <button
            onClick={openAppleWebsite}
            className="mt-4 w-full bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none shadow-md hover:shadow-lg"
          >
            IOS Testflight
          </button>
          <button
            onClick={openAppleWebsite}
            className="mt-4 w-full bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-300 transform hover:scale-105 focus:outline-none shadow-md hover:shadow-lg"
          >
            Android APK
          </button>
        </div>
      </div>
    )
  );
}
