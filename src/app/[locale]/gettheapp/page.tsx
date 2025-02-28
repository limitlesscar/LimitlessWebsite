import Header from "@/app/components/navbarcenter/header";
import NavCenter from "@/app/components/navbarcenter/NavCentar";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
    const t = useTranslations("homePage");

    return (
      <div>
           
            <div className="max-w-2xl mx-auto">
            <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                    {t("workFastFromAnywhere")}
                </h3>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                    {t("stayUpdatedWithFlowbite")}
                </p>
                <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a
                        href="#"
                        className="w-full sm:w-auto  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                        <svg
                            className="mr-3 w-7 h-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="apple"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9z"
                            ></path>
                        </svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">{t("downloadOnThe")}</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">{t("macAppStore")}</div>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="w-full sm:w-auto  bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                        <svg
                            className="mr-3 w-7 h-7"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="google-play"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                            ></path>
                        </svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">{t("getItOn")}</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">{t("googlePlay")}</div>
                        </div>
                    </a>
                </div>
            </div>
            <p className="mt-5">
                {t("thisComponentIsPartOf")} 
                <a className="text-blue-600 hover:underline" href="#" target="_blank">
                    {t("flowbiteDocumentation")}
                </a>.
            </p>
        </div>
      </div>
  
       
    );
};

export default Page;
