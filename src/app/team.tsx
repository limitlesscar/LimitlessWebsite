import { useTranslations } from "next-intl";
import "./car.css";
export default function Team() {
  const t = useTranslations("homePage");
  return (
    <div className="relative bg-[#32bb78]">
      <div className="relative h-80 overflow-hidden bg-white md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          alt=""
          src="https://plus.unsplash.com/premium_photo-1677529497048-2bf5899e68de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
          className="size-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base/7 different font-semibold text-white">
            {t("Support primé")}
          </h2>
          <p className="mt-2 text-4xl font-semibold different tracking-tight text-white sm:text-5xl">
            {t("Nous sommes là pour vous aider")}
          </p>

          <div className="mt-8">
            <a
              href="/aide"
              className="inline-flex rounded-full bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("Visitez le centre d'aide")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
