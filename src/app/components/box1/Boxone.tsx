import Image from 'next/image';
import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';




import français from "@/app/components/Devices/Apple/français.png";
import anglais from "@/app/components/Devices/Apple/anglais.png";
import portuguais from "@/app/components/Devices/Apple/portuguais.png";
import japonais from "@/app/components/Devices/Apple/japonais.png";
import espagnol from "@/app/components/Devices/Apple/espagnol.png";
import italian from "@/app/components/Devices/Apple/italian.png";
import russian from "@/app/components/Devices/Apple/russe.png";






import françaisdeux from "@/app/components/Devices 2/Apple/français.png";
import japonaisdeux from "@/app/components/Devices 2/Apple/japonais.png";
import anglaisdeux from "@/app/components/Devices 2/Apple/anglais.png";
import portuguaisdeux from "@/app/components/Devices 2/Apple/portuguais.png";
import espagnoldeux from "@/app/components/Devices 2/Apple/portuguais.png";
import italiandeux from "@/app/components/Devices 2/Apple/italian.png";
import russiandeux from "@/app/components/Devices 2/Apple/russe.png";






import françaistrois from "@/app/components/Devices 3/Apple/français.png";
import anglaistrois from "@/app/components/Devices 3/Apple/anglais.png";
import portuguaistrois from "@/app/components/Devices 3/Apple/portuguais.png";
import japonaistrois from "@/app/components/Devices 3/Apple/japonais.png";
import espagnoltrois from "@/app/components/Devices 3/Apple/espagnol.png";
import italiantrois from "@/app/components/Devices 3/Apple/italian.png";
import russiantrois from "@/app/components/Devices 3/Apple/russe.png";




import françaisquatre from "@/app/components/Devices 4/Apple/français.png";
import anglaisquatre from "@/app/components/Devices 4/Apple/english.png";
import portuguaisquatre from "@/app/components/Devices 4/Apple/portuguais.png";
import japonaisquatre from "@/app/components/Devices 4/Apple/japonais.png";
import italianquatre from "@/app/components/Devices 4/Apple/italian.png";
import espagnolquatre from "@/app/components/Devices 4/Apple/espgnol.png";
import russianquatre from "@/app/components/Devices 4/Apple/russe.png";


import françaiscinq from "@/app/components/Devices 5/Apple/français.png";
import anglaiscinq from "@/app/components/Devices 5/Apple/anglais.png";
import portuguaiscinq from "@/app/components/Devices 5/Apple/portuguais.png";
import japonaiscinq from "@/app/components/Devices 5/Apple/japonais.png";
import espagnolcinq from "@/app/components/Devices 5/Apple/espagnol.png";
import italiancinq from "@/app/components/Devices 5/Apple/italian.png";
import russiancinq from "@/app/components/Devices 5/Apple/russe.png";






import françaissix from "@/app/components/Devices 6/Apple/français.png";
import anglaissix from "@/app/components/Devices 6/Apple/anglais.png";
import portuguaissix from "@/app/components/Devices 6/Apple/portuguais.png";
import japonaissix from "@/app/components/Devices 6/Apple/japonais.png";
import italiansix from "@/app/components/Devices 6/Apple/italian.png";
import espagnolsix from "@/app/components/Devices 6/Apple/espagnol.png";
import russiansix from "@/app/components/Devices 6/Apple/russe.png";






import françaisept from "@/app/components/Devices 7/Apple/français.png";
import anglaissept from "@/app/components/Devices 7/Apple/english.png";
import portuguaissept from "@/app/components/Devices 7/Apple/portuguais.png";
import japonaisept from "@/app/components/Devices 7/Apple/japonais.png";
import italiansept from "@/app/components/Devices 7/Apple/italian.png";
import espagnolsept from "@/app/components/Devices 7/Apple/espagnol.png";
import russiansept from "@/app/components/Devices 7/Apple/russe.png";


import françaishuit from "@/app/components/Devices 8/Apple/français.png";
import anglaishuit from "@/app/components/Devices 8/Apple/anglais.png";
import portuguaishuit from "@/app/components/Devices 8/Apple/portuguais.png";
import japonaishuit from "@/app/components/Devices 8/Apple/japonais.png";
import espagnolhuit from "@/app/components/Devices 8/Apple/espagnol.png";
import italianlhuit from "@/app/components/Devices 8/Apple/italian.png";
import russianhuit from "@/app/components/Devices 8/Apple/russe.png";









export default function Boxone({}) {

  const locale = useLocale();

  useEffect(() => {
    const elementsLeft = document.querySelectorAll('.animate-on-scroll-left');
    const elementsRight = document.querySelectorAll('.animate-on-scroll-right');

    const observerOptions = {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate-on-scroll-left')) {
            entry.target.classList.add('animate-left');
          } else if (entry.target.classList.contains('animate-on-scroll-right')) {
            entry.target.classList.add('animate-right');
          }
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    }, observerOptions);

    elementsLeft.forEach((el) => observer.observe(el));
    elementsRight.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);



  const featuresOne = [
    {
      description:
        'Gérez vos réservations et vos commandes Consultez et modifiez vos réservations en toute simplicité depuis votre tableau de bord',
    },
  ];

  const featuresTwo = [
    {
      description:
        'featuresTwo',
    },
  ];

  const featuresThree = [
    {
      description: 'Trouvez des voitures autour de vous sur une carte interactive',
    },
  ];

  const featuresFour = [
    {
      description:
        'Discutez facilement avec les propriétaires des voitures via notre système de messagerie intégré',
    },
  ];

  const featuresFive = [
    {
      description:
        'Notez votre expérience et partagez vos retours pour aider la communauté limitless à s’améliorer',
    },
  ];

  const featuresSix = [
    {
      description:
        'Modifiez et envoyez vos documents officiels, comme votre permis de conduire et votre pièce d’identité, en toute sécurité',
    },
  ];









const t = useTranslations('homePage')
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
     

              <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 mb-40">
        <div className="lg:order-2">
          <h2 className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
            {t('Réservez une voiture proche de chez vous')}
          </h2>
         
          <dl className="mt-10 space-y-8 text-base text-gray-600">
            {featuresTwo.map((feature, index) => (
              <div key={index}>
                <dd className="mb-12">{t(feature.description)}</dd>
                <a
                     href="/gettheapp"
                  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t('Réservez une voiture')} 
                </a>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Product screenshot"
            src={
              locale === 'pt'
                ? portuguaissix
                : locale === 'en'
                ? anglaissix 
                 : locale === 'ru'
                ? russiansix
                : locale === 'fr'
                ? françaissix: 
                locale === 'es'
                ? espagnolsix
                : locale === 'ja'
                ? japonaissix
                : locale === 'it'
                ? italiansix  // Add the appropriate value here for Italian
                : françaissix  // Default fallback to French if locale doesn't match
            }
            
            className="w-auto h-72 lg:h-80 max-w-full"
          />
        </div>
      </div>

















        {/* Box Three: screenThree */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 mb-40">
          <div>
            <h2  className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
              {t('Trouvez des voitures autour de vous sur la carte')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 mb-12">
              {t('Visualisez les voitures disponibles autour de vous directement sur la carte')}
            </p>
            <a
                    href="/gettheapp"
                    className="rounded-full my-4 bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-70  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                   {t('Ouvrir la carte')}
                  </a>
          </div>
          <div className="flex justify-center">








<Image
            alt="Product screenshot"
            src={
              locale === 'pt'
                ? portuguaisdeux
                : locale === 'en'
                ? anglaisdeux 
                 : locale === 'es'
                ? espagnoldeux
                : locale === 'fr'
                ? françaisdeux : locale === 'it'
                ? italiandeux
                : locale === 'ru'
                ? russiandeux
                : locale === 'ja'
                ? japonaisdeux
                : françaisdeux
            }
            className="w-auto h-60 lg:h-80 max-w-full"
          />
          </div>
        </div>





    
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 mb-40">
          <div className="lg:order-2">
            <h2  className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
              {t('Discutez avec les propriétaires des voitures')}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
{t('Utilisez notre système de messagerie intégré pour échanger facilement avec les propriétaires des voitures')}            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresFour.map((feature, index) => (
                <div key={index}>
                
                  <a
    href="/gettheapp"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-[#32bb78] active:border active:border-blue-600"
>
  {t('Discutez avec les propriétaires')}
</a>

                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
          <Image
            alt="Product screenshot"
            src={
              locale === 'pt'
                ? portuguais
                : locale === 'en'
                ? anglais
                : locale === 'it'
                ? italian:
                 locale === 'es'
                ? espagnol  
                : locale === 'ru'
                ? russian
                : locale === 'fr'
                ? français
                : locale === 'ja'
                ? japonais
                : français
            }
            className="w-auto h-60 lg:h-80 max-w-full"
          />
          </div>
        </div>

        {/* Box Five: screenFive */}
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 mb-40">
          <div>
            <h2  className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
              {t('Notez votre expérience')}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {t("Donnez votre avis pour aider notre communauté à grandir et à s'améliorer")}
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresFive.map((feature, index) => (
              
                <div key={index}>
                 
                  <a
    href="/gettheapp"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-[#32bb78] active:border active:border-blue-600"
>
  {t('Notez votre expérience')}
</a>

                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
          <Image
            alt="Product screenshot"
            src={
              locale === 'pt'
                ? portuguaiscinq
                : locale === 'en'
                ? anglaiscinq
                : locale === 'es'
                ? espagnolcinq
                : locale === 'it'
                ? italiancinq
                : locale === 'fr'
                ? françaiscinq
                : locale === 'ru'
                ? russiancinq
                : locale === 'ja'
                ? japonaiscinq
                : françaiscinq
            }
            className="w-auto h-60 lg:h-80 max-w-full"
          />
          </div>
        </div>








        
        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20 mb-40 ">
          <div className="lg:order-2">
            <h2  className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
             {t('Modifiez et envoyez vos documents officiels')}
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              {t('Gérez vos documents comme votre permis de conduire et votre pièce d’identité en toute sécurité')}
            </p>
            <dl className="mt-10 space-y-8 text-base text-gray-600">
              {featuresSix.map((feature, index) => (
                <div key={index}>
                 
                  <a
    href="/gettheapp"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-[#32bb78] active:border active:border-blue-600"
>
  {t('envoyez vos documents officiels')}
</a>

                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center">
          <Image
            alt="Product screenshot"
            src={
              locale === 'pt'
                ? portuguaissept
                : locale === 'en'
                ? anglaissept
                : locale === 'es'
                ? espagnolsept
                : locale === 'it'
                ? italiansept  
                : locale === 'ru'
                ? russiansept
                : locale === 'fr'
                ? françaisept
                : locale === 'ja'
                ? japonaisept
                : françaisept
            }
            className="w-auto h-60 lg:h-80 max-w-full"
          />
          </div>
        </div>












        <div className="mx-auto max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 sm:gap-y-20">
  <div className="lg:order-2 flex justify-center">
  <Image
            alt="Product screenshot"
            src={
              locale === 'pt'
                ? portuguaisquatre
                : locale === 'en'
                ? anglaisquatre
                : locale === 'es'
                ? espagnolquatre
                : locale === 'it'
                ? italianquatre  
                : locale === 'ru'
                ? russianquatre
                : locale === 'fr'
                ? françaisquatre
                : locale === 'ja'
                ? japonaisquatre
                : françaisquatre
            }
            className="w-auto h-60 lg:h-80 max-w-full"
          />
  </div>
  <div className="lg:order-1">
    <h2  className="mt-1 different text-4xl font-semibold tracking-tight sm:text-5xl leading-relaxed bg-gradient-to-r from-blue-500 to-[#32bb78] bg-clip-text text-transparent">
      {t('Gérez vos réservations et vos commandes')}
    </h2>
   
    <dl className="mt-10 space-y-8 text-base text-gray-600">
      {featuresOne.map((feature, index) => (
        <div key={index}>
          <dd className="mb-12">{ t(feature.description)}</dd>
          <a
    href="/gettheapp"
  className="rounded-full bg-[#32bb78] px-12 py-3.5 text-sm font-semibold text-white shadow-sm 
             hover:bg-white hover:text-[#32bb78] hover:border hover:border-[#32bb78] 
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
             active:bg-[#32bb78] active:border active:border-blue-600"
>
  {t('Gérez vos réservations')}
</a>

        </div>
      ))}
    </dl>
  </div>
</div>



      </div>
    </div>
  );
}
