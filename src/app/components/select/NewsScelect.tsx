import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
      {" "}
      {/* 16:9 aspect ratio container */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/El8X8o8TR7U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const Feature = () => {
  const t = useTranslations("posts");

  return (
    <div className="relative overflow-hidden py-10 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 text-center">
          <h2 className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
            {t("launchInFrance")}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-neutral-400">
            {t("excitedToHelp")}
          </p>
          <div className="mt-10 flex justify-center items-center">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Add the YouTube video with responsive fullscreen box */}
              <Video />

              <div className="absolute bottom-12 -left-20 -z-[1] w-12 h-12 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
                <div className="bg-white w-full h-full rounded-lg dark:bg-neutral-900"></div>
              </div>

              <div className="absolute -top-12 -right-20 -z-[1] w-12 h-12 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                <div className="bg-white w-full h-full rounded-full dark:bg-neutral-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
