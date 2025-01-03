import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Box2() {
  const router = useRouter();

  const navigateToNew = () => {
    router.push('/new');
  };
  const t = useTranslations('homePage')
    return (
      <div className="relative bg-white">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            alt=""
            src="https://resources.turo.com/f/253489/1584x352/de36d46225/browse-entry_web-2x.jpg/m/"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
           
           
            <p className="mt-2 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {t('Louez des voitures pour toutes les occasions')}



            </p>
            <p className="mt-6 text-base text-gray-600">
            {t('Explorez une incroyable sélection de voitures, des plus communes aux plus extraordinaires')}

            </p>
            <div className="mt-8">
            <button onClick={navigateToNew}

  className="inline-flex rounded-xl bg-[#32bb78] px-4 py-3 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 
             active:bg-blue-500 active:border active:border-blue-600"
>
  {t('Explorer')}
</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
  